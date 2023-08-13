<template>
  <div class="home">
    <!-- 头部导航栏 -->
    <HomeNavbar />
    <!-- 首页轮播 -->
    <HomeBanner />

    <HomeEntryBroad />

    <CateSwiper />

    <HouseList />
  </div>
</template>

<script setup>
import HomeNavbar from "./components/HomeNavbar.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeEntryBroad from "./components/HomeEntryBoard.vue";
import CateSwiper from "./components/CateSwiper.vue";
import HouseList from "./components/HouseList.vue";
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
}
</style>
