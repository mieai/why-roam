<template>
  <div class="entry-board">
    <!-- 城市选择 -->
    <LocationArea />

    <DateRangePick />

    <div class="price-counter block">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>

    <div class="keywords">关键字/位置/民宿名</div>

    <div class="hot-suggests block">
      <template v-for="item in hotSuggests" :key="item.tagLink">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <div class="search-btn" @click="onSearchPage">搜索</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useHomeStore from '@/stores/home'

import DateRangePick from './DateRangePick.vue'
import LocationArea from './LocationArea.vue'
import { storeToRefs } from 'pinia'

const router = useRouter()

const homeStore = useHomeStore()

const { hotSuggests } = storeToRefs(homeStore)

const onSearchPage = () => {
  router.push({
    path: '/search'
  })
}
</script>

<style lang="less" scoped>
.entry-board {
  padding: 12px;

  .block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .price-counter {
    color: #999;
    font-size: 14px;
    padding: 12px;
  }

  .keywords {
    text-align: center;
  }

  .hot-suggests {
    padding: 12px;
    box-sizing: border-box;
    flex-wrap: wrap;

    .item {
      padding: 6px;
      border-radius: 6px;
      margin: 3px;
      background-color: #f4b8a5;
      font-size: 14px;
    }
  }
  .search-btn {
    height: 38px;
    line-height: 38px;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #f4b8a5, var(--primary-color));
  }
}
</style>
