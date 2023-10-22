<template>
  <div class="item">
    <div class="inner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="image" />
      </div>

      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="" />
          <span class="text">{{ itemData.location }}</span>
        </div>

        <div class="name">{{ itemData.name }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>

        <div class="price">
          <div class="new-price">¥{{ itemData.finalPrice }}</div>
          <div class="old-price">¥{{ itemData.productPrice }}</div>
          <div class="tip-text" v-if="itemData.priceTipBadge" :style="badgeBgStyle">
            {{ itemData.priceTipBadge.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

let { priceTipBadge } = toRefs(props.itemData)
let badgeBgStyle = computed(() => {
  if (!priceTipBadge.value) return { color: 'red' }

  let { startColor, endColor, background, color } = priceTipBadge.value.gradient

  return {
    'background-color': background,
    'background-image': `linear-gradient(270deg,${startColor},${endColor})`,
    color: color
  }
})
</script>

<style lang="less" scoped>
.item {
  width: 50%;

  .inner {
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;

    .info {
      margin-top: 6px;
    }
    .location {
      display: flex;
      align-items: center;
      img {
        width: 12px;
        height: 12px;
      }

      .text {
        margin-left: 2px;
        font-size: 14px;
        color: #666;
      }
    }

    .cover {
      display: flex;
      img {
        width: 100%;
      }
    }

    .name {
      margin: 5px 0;
      font-size: 14px;
      color: #666;

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
      align-items: flex-start;

      margin: 8px 0;

      .new-price {
        color: var(--primary-color);
        font-size: 14px;
      }

      .old-price {
        margin: 0 3px;
        color: #999;
        font-size: 12px;
        text-decoration: line-through;
      }

      .tip-text {
        background-image: linear-gradient(270deg, #f66, #ff9f9f);
        color: #fff;
        padding: 0 6px;
        border-radius: 8px;
        font-size: 14px;
      }
    }
  }
}
</style>
