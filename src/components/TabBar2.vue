<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarConfig" :key="index">
      <div
        class="tab-bar-item"
        :class="{ active: activeIndex == index }"
        @click="indexClick(index, item)"
      >
        <img
          class="icon"
          :src="assetsImage(activeIndex == index ? item.activeIcon : item.icon)"
          :alt="item.text"
        />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";

import tabbarConfig from "./tabbar-config";
import { useRouter } from "vue-router";

import assetsImage from "@/utils/assetsImage.js";

const activeIndex = ref(0);

const router = useRouter();

const indexClick = (index, item) => {
  activeIndex.value = index;

  router.push(item.path);
};
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    .icon {
      width: 36px;
    }

    .text {
      font-size: 14px;
      margin-top: 3px;
    }
  }
}
</style>
