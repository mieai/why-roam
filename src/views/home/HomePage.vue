<template>
  <div class="home" ref="homePageRef">
    <!-- 头部导航栏 -->
    <HomeNavbar />
    <!-- 首页轮播 -->
    <HomeBanner />

    <HomeEntryBroad />

    <CateSwiper />

    <AffixSearchBar v-if="isAffix"></AffixSearchBar>

    <HouseList />
  </div>
</template>

<script setup>
import { watch, computed } from 'vue'

import HomeNavbar from './components/HomeNavbar.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeEntryBroad from './components/HomeEntryBoard.vue'
import CateSwiper from './components/CateSwiper.vue'
import HouseList from './components/HouseList.vue'
import AffixSearchBar from './components/AffixSearchBar.vue'

import { useScroll } from '@/hooks/useScroll.js'

import useHomeStore from '@/stores/home'
import { ref, onActivated, onDeactivated } from 'vue'

const homeStore = useHomeStore()

const homePageRef = ref()

// 使用页面滚动，监听window滚动、在进行页面切换的时，window的高度会被重置
// 另外一种做法。离开页面时，取消监听，这样存储的值不会被其他页面修改，打开再监听一次
const { isReachBottom, scrollTop } = useScroll()

// 监听到达底部后请求更多数据
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.getHomeHouseList().then(() => {
      isReachBottom.value = false
    })
  }
})

onActivated(() => {
  homePageRef.value?.scrollTo(0, scrollTop.value)
})

onDeactivated(() => {
  console.log('keep page')
})

const isAffix = computed(() => scrollTop.value > 120)

// 获取home页面中的数据
homeStore.getHomeCategories()
homeStore.getHomeHouseList()
homeStore.getHomeHotSuggests()
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;

  height: 100vh;
  overflow: auto;
}
</style>
