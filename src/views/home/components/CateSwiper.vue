<template>
  <div class="categories">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" :alt="item.subTitle" />
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

import useHomeStore from "@/stores/home";
const homeStore = useHomeStore();
homeStore.getHomeCategories();

const { categories } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  padding: 0 12px;
  margin-top: 8px;

  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;

    img {
      width: 40px;
    }

    .title {
      font-size: 12px;
      margin-top: 6px;
    }
  }
}
</style>
