<template>
  <div class="house-detail" ref="pageElRef">
    <van-nav-bar title="房屋详情" left-text="T" left-arrow @click-left="onBack" />

    <van-tabs
      class="tab-control"
      v-model:active="active"
      @click-tab="onClickTab"
      v-show="isTabContorl"
      sticky
    >
      <template v-for="tabName in tabNames" :key="tabName">
        <van-tab :title="tabName"></van-tab>
      </template>
    </van-tabs>

    <!-- 只有mainPart数据刷新了才重现渲染,避免getComponentRef在滚动时多次执行 -->
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <HouseBanner :images="mainPart.topModule?.housePicture?.housePics" />
      <HouseOverview name="概述" :ref="getComponentRef" :topModule="mainPart.topModule" />
      <HouseFacility
        name="设施"
        :ref="getComponentRef"
        :houseFacility="mainPart.dynamicModule?.facilityModule?.houseFacility"
      ></HouseFacility>
      <HouseLandlord
        name="房东"
        :ref="getComponentRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      ></HouseLandlord>
      <HouseComment
        name="评论"
        :ref="getComponentRef"
        :comment="mainPart.dynamicModule.commentModule"
      ></HouseComment>
      <HouseRules
        name="须知"
        :ref="getComponentRef"
        :order-rules="mainPart.dynamicModule?.rulesModule?.orderRules"
      ></HouseRules>
      <RoundMap
        name="周边"
        :ref="getComponentRef"
        :position="mainPart.dynamicModule?.positionModule"
      />
      <HouseReadme :content="mainPart.introductionModule" />
    </div>

    <div class="footer">
      <div>放心住不会死人的</div>
      <div class="copy-right">《漫步随想》</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import useDetailStore from '@/stores/detail'

import HouseBanner from './components/HouseBanner.vue'
import HouseOverview from './components/HouseOverview.vue'
import HouseFacility from './components/HouseFacility.vue'
import HouseLandlord from './components/HouseLandlord.vue'
import HouseComment from './components/HouseComment.vue'
import HouseRules from './components/HouseRules.vue'
import RoundMap from './components/RoundMap.vue'
import HouseReadme from './components/HouseReadme.vue'

import { useScroll } from '@/hooks/useScroll.js'
import { watch } from 'vue'

const router = useRouter()
const route = useRoute()

// 请求数据
const houseId = route.params.id
const detailStore = useDetailStore()
detailStore.getDetailByHouseId(houseId)

const { houseDetail } = storeToRefs(detailStore)
const mainPart = computed(() => houseDetail.value?.mainPart)

// 返回
const onBack = () => {
  router.back()
}

const active = ref()

const offsetTops = ref({})

const offsetValues = computed(() => Object.values(offsetTops.value).map((el) => el.offsetTop))

const tabNames = computed(() => Object.keys(offsetTops.value))

const getComponentRef = (ref) => {
  if (!ref) return
  const name = ref.$el.getAttribute('name')

  offsetTops.value[name] = ref.$el
}

const pageElRef = ref()

let isClickTo = false

let targetPos = 0
const onClickTab = (tab) => {
  let { title, name } = tab

  const el = offsetTops.value[title]
  let scrollTop = el.offsetTop

  // 其他情况，需要-44的tabControl高度,不让会被tabControl遮挡
  if (name != 0) {
    scrollTop -= 44
  }

  isClickTo = true

  targetPos = scrollTop
  pageElRef.value.scrollTo({
    top: scrollTop,
    behavior: 'smooth'
  })
}

// 监听滚动
const { scrollTop } = useScroll(pageElRef)

const isTabContorl = computed(() => scrollTop.value > 320)

// 当页面的滚动 小于最后一个元素offsetTop时，最后一个元素的index永远设置不上
const scrollTabIndex = (newValue) => {
  if (targetPos == newValue) isClickTo = false

  if (isClickTo) {
    return
  }

  let offsets = offsetValues.value

  let posIndex = offsets.length - 1

  for (let i = 0; i < offsets.length; i++) {
    const boundY = offsets[i]
    if (newValue + 44 < boundY) {
      posIndex = i - 1
      break
    }
  }
  if (posIndex == -1) {
    posIndex = 0
  }
  active.value = posIndex
}

watch(scrollTop, (newValue) => {
  scrollTabIndex(newValue)
})
</script>

<style lang="less" scoped>
.house-detail {
  // 这里特意想使用其他元素的滚动条，好做练习
  height: 100vh;
  overflow: auto;

  .tab-control {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 14;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;
    font-size: 14px;
    color: rgba(205, 168, 99, 0.82);
    // background-color: rgba(205, 168, 99, 0.82);

    .copy-right {
      font-weight: bold;
      text-align: center;
      margin-top: 12px;
    }
  }
}
</style>
