<template>
  <div>
    <HomeNavbar></HomeNavbar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <LocationArea />
   
  </div>
</template>

<script setup>
import HomeNavbar from './components/HomeNavbar.vue';
import LocationArea from './components/LocationArea.vue';
</script>

<style lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}
</style>
