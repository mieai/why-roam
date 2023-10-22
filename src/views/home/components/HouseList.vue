<template>
  <div class="wrapper">
    <h2 class="title">热门精选</h2>
    <div class="list-area">
      <template v-for="item in houseList" :key="item.data?.houseId">
        <ListItemT3
          @click="jumpToDetail(item.data)"
          v-if="item.discoveryContentType === 3"
          :itemData="item.data"
        ></ListItemT3>
        <ListItemT9
          @click="jumpToDetail(item.data)"
          v-else-if="item.discoveryContentType === 9"
          :itemData="item.data"
        ></ListItemT9>
      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import useHomeStore from '@/stores/home'

import { ListItemT3, ListItemT9 } from '@/components/list-item-type/'
import { useRouter } from 'vue-router'

const homeStore = useHomeStore()

const { houseList } = storeToRefs(homeStore)

const router = useRouter()
const jumpToDetail = (item) => {
  router.push('/detail/' + item.houseId)
}
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
