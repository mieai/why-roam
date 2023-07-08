<template>
  <div class="tab-bar">
    <van-tabbar v-model="activeIndex" active-color="#fc7b5b">
      <template v-for="(item, index) in tabbarConfig" :key="index">
        <van-tabbar-item :to="item.path">
          <template #icon="{ active }">
            <img
              class="icon"
              :src="assetsImage(active ? item.activeIcon : item.icon)"
              :alt="item.text"
            />
          </template>
          <span class="text">{{ item.text }}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

import tabbarConfig from "./tabbar-config";

import assetsImage from "@/utils/assetsImage.js";

const activeIndex = ref(0);
</script>

<style lang="less" scoped>
.tab-bar {
  border-top: 1px solid #f3f3f3;

  .icon {
    height: 27px;
  }

  .text {
    font-size: 14px;
    margin-top: 3px;
  }
}
</style>
