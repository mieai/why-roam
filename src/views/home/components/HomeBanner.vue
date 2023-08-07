<template>
  <div class="banner">
    <van-swipe autoplay="3000" style="height: 210px">
      <template v-for="i in 5" :key="i">
        <van-swipe-item>
          <img :src="assetsImage(`/home/banner${i}.webp`)" alt="" />
        </van-swipe-item>
      </template>

      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import assetsImage from "@/utils/assetsImage";
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: white;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
