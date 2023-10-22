<template>
  <div class="header-info">
    <div class="name">{{ topModule.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topModule.houseTags" :key="index">
        <span
          class="item"
          v-if="item.tagText"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color
          }"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment-brief scaffold">
      <div class="left">
        <span class="overall">{{ topModule.commentBrief.overall }}</span>
        <span class="title">{{ topModule.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ topModule.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="total-count"> {{ topModule.commentBrief.totalCount }}条评论 &gt; </span>
      </div>
    </div>
    <div class="position scaffold">
      <div class="left">
        {{ topModule.nearByPosition.address }}
      </div>
      <div class="right map-rim">地图·周边</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  topModule: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="less" scoped>
.header-info {
  padding: 12px;

  .name {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #424242;
    text-align: justify;
    overflow: hidden;
  }

  .tags {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;

    .item {
      font-size: 14px;
      margin: 5px;
      border-radius: 6px;
      padding: 3px 6px;
    }
  }

  .scaffold {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-radius: 6px;
    background-color: #f4f6f7;
    font-size: 14px;
    margin-top: 8px;

    .right {
      font-size: 12px;
      color: var(--accent-color);
    }
  }
  .comment-brief {
    color: #424242;

    .overall {
      font-size: 18px;
      font-family: 700;
    }

    .title {
      font-weight: 700;
      margin: 0px 6px;
    }

    .brief {
      color: #666;
      font-size: 12px;
    }
  }

  .postion {
    .right {
      font-size: 14px;
      font-weight: 700;
    }
  }
}
</style>
