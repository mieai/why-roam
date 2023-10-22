<template>
  <div class="item">
    <div class="inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="image" />
      </div>
      <div class="info">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="price">
          <van-rate
            color="#fff"
            :size="12"
            readonly
            allow-half
            :model-value="+itemData.commentScore"
          ></van-rate>
          <div class="new-price">¥ {{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.item {
  width: 50%;

  .inner {
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;

    .cover {
      display: flex;
      img {
        width: 100%;
      }
    }

    .info {
      position: absolute;
      bottom: 0;
      color: #fff;
      font-size: 14px;
      padding: 6px 12px;
    }

    .name {
      margin: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .summary {
      font-size: 12px;
    }

    .price {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
  }
}
</style>
