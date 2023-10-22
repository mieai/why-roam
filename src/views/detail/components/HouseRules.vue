<template>
  <BlockHeader title="预定须知">
    <div class="rules">
      <template v-for="(item, index) in orderRules" :key="index">
        <div class="item">
          <span class="title">{{ index + 1 }} .{{ item.title }}</span>
          <span class="intro">{{ item.introduction }}</span>
          <span class="tips" v-if="item.tips">查看说明</span>
        </div>
      </template>
    </div>
  </BlockHeader>
</template>

<script setup>
import BlockHeader from '@/components/block-header/BlockHeader.vue'

defineProps({
  orderRules: Array,
  default: () => []
})
</script>

<style lang="less" scoped>
.rules {
  font-size: 12px;
  .item {
    display: flex;
    padding: 8px 0px;
    color: #444;
  }

  .title {
    width: 65px;
  }

  .intro {
    flex: 1;
  }
}
</style>
