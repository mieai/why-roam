<template>
  <div class="home">
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
import { watch, computed } from "vue";


import HomeNavbar from "./components/HomeNavbar.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeEntryBroad from "./components/HomeEntryBoard.vue";
import CateSwiper from "./components/CateSwiper.vue";
import HouseList from "./components/HouseList.vue";
import AffixSearchBar from "./components/AffixSearchBar.vue";

import { useScroll } from '@/hooks/useScroll.js';

import useHomeStore from "@/stores/home";


const homeStore = useHomeStore();

const { isReachBottom,scrollTop } =  useScroll();

// 监听到达底部后请求更多数据
watch(isReachBottom,(newValue)=>{
  if(newValue){
    homeStore.getHomeHouseList().then(()=>{
      isReachBottom.value = false;
    })
  }
})

const isAffix = computed(()=>scrollTop.value > 120);

// 获取home页面中的数据
homeStore.getHomeCategories();
homeStore.getHomeHouseList();
homeStore.getHomeHotSuggests();
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
}
</style>
