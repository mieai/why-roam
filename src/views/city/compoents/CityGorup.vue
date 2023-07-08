<template>
  <van-index-bar highlight-color="#fc7b5b" :index-list="indexList">
    <van-index-anchor index="#" />

    <div class="list">
      <template v-for="city in citiesGroup.hotCities" :key="city.cityId">
        <div class="list-item" @click="changeCity(city)">
          {{ city.cityName }}
        </div>
      </template>
    </div>

    <template v-for="item in citiesGroup.cities" :key="item.group">
      <van-index-anchor :index="item.group" />

      <template v-for="city in item.cities" :key="city.cityId">
        <van-cell @click="changeCity(city)" :title="city.cityName" />
      </template>
    </template>
  </van-index-bar>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

import useCityStore from "@/stores/city";

const router = useRouter();

const props = defineProps({
  citiesGroup: Object,
});

const cityStore = useCityStore();

const changeCity = (city) => {
  cityStore.currentCity = city;
  console.log(cityStore.currentCity);
  router.back();
};

const indexList = computed(() => {
  let list = props.citiesGroup.cities.map((city) => city.group);
  list.unshift("#");
  return list;
});
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-right: 20px;

  .list-item {
    width: 75px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    // color: #424242;
    background-color: rgba(255, 118, 30, 0.15);
    border-radius: 12px;
    color: #ff761e;
    margin: 5px 0 5px;
  }
}
</style>
