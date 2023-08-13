<template>
  <div class="wrapper">
    <h2 class="title">热门精选</h2>
    <div class="list-area">
      <template v-for="item in houseList" :key="item.data?.houseId">
        <ListItemT3
          v-if="item.discoveryContentType === 3"
          :itemData="item.data"
        ></ListItemT3>
        <ListItemT9
          v-else-if="item.discoveryContentType === 9"
          :itemData="item.data"
        ></ListItemT9>
      </template>
    </div>
    <button @click="loadMore">more</button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

import { ListItemT3, ListItemT9 } from "@/components/list-item-type/";

import useHomeStore from "@/stores/home";

const homeStore = useHomeStore();
homeStore.getHomeHouseList();

const { houseList } = storeToRefs(homeStore);

const loadMore = () => {
  homeStore.getHomeHouseList();
};
</script>

<style lang="less" scoped>
.wrapper {
  padding: 24px;

  .title {
    font-size: 18px;
  }

  .list-area {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
