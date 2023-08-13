<template>
  <div class="city">
    <van-search
      v-model="searchValue"
      show-action
      placeholder="请输入搜索关键词"
      @cancel="onCancel"
    />

    <van-tabs v-model:active="activeName" color="#fc7b5b">
      <template v-for="(value, key) in allCities" :key="key">
        <van-tab :name="key" :title="value.title">
          <div class="content">
            <CityGorup :citiesGroup="value"></CityGorup>
          </div>
        </van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import useCityStore from "@/stores/city";

import CityGorup from "./components/CityGorup.vue";

const router = useRouter();
const cityStore = useCityStore();

const searchValue = ref("");
const activeName = ref();

const onCancel = () => {
  router.back();
};

cityStore.getCitiesAction();

const { allCities } = storeToRefs(cityStore);
</script>

<style lang="less" scoped>
:deep(.van-index-anchor--sticky) {
  top: -1px !important;
}

:deep(.van-tabs__wrap) {
  position: relative;
  z-index: 120;
}

.content {
  overflow: auto;
  height: calc(100vh - 100px);
}
</style>
