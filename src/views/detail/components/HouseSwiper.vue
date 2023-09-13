<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image.url" class="img" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="less" scoped>
.img {
  width: 100%;
}
</style>
