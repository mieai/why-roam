<template>
  <div class="block">
    <div class="header">
      <div class="title">{{ title }}</div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer" v-if="moreText.length">
      <span>{{ moreText }}</span>
      <van-icon name="arrow"></van-icon>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  moreText: {
    type: String,
    default: ''
  }
})
</script>

<style lang="less" scoped>
.block {
  padding: 8px 12px;
  border-top: 6px solid #f3f8f6;
  background: #fff;

  .header {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #e6e6e6;

    .title {
      font-size: 18px;
      color: #424242;
    }
  }

  .content {
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 13px;
    line-height: 28px;
    // font-weight: 500;
    color: #363636;
  }
}
</style>
