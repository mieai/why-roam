<template>
  <div>
    <van-nav-bar
      title="房屋详情"
      left-text="T"
      left-arrow
      @click-left="onBack"
    />

    <div class="main" v-if="mainPart">
      <HouseSwiper :images="mainPart?.topModule?.housePicture?.housePics" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import useDetailStore from "@/stores/detail";
import HouseSwiper from "./components/HouseSwiper.vue";

const router = useRouter();

const route = useRoute();
const houseId = route.params.id;

const detailStore = useDetailStore();

detailStore.getDetailByHouseId(houseId);

const { houseDetail } = storeToRefs(detailStore);
const mainPart = computed(() => houseDetail.value.mainPart);

const onBack = () => {
  router.back();
};
</script>

<style lang="less" scoped></style>
