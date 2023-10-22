<template>
  <div class="readme">
    <h2 class="title">{{ content.title }}</h2>
    <div class="content">{{ content.introduction }}</div>
  </div>
</template>

<script setup>
defineProps({
  content: Object,
  default: () => ({}),
});
</script>

<style lang="less" scoped>
.readme {
  padding: 8px 12px;
  border-top: 6px solid #f3f8f6;

  .title {
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }

  .content {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.4;
    color: #666;
  }
}
</style>
