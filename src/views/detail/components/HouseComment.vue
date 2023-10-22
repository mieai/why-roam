<template>
  <BlockHeader title="热门评论" :more-text="`查看全部${comment.totalCount}条反应`">
    <div class="comment">
      <div class="header">
        <div class="left">
          <div class="overall">
            <span class="text">{{ comment.overall.toFixed(1) }}</span>
          </div>
          <div class="score">
            <div class="title">{{ comment.scoreTitle }}</div>
            <div class="count">{{ comment.totalCount }}条评论</div>
            <div class="star">
              <van-rate
                :modelValue="comment.overall"
                color="#fe6931"
                readonly
                size="14"
                allow-half
              ></van-rate>
            </div>
          </div>
        </div>
        <div class="right">
          <template v-for="item in comment.subScores" :key="item">
            <span class="item">{{ item }}</span>
          </template>
        </div>
      </div>

      <div class="tags">
        <template v-for="item in comment.commentTagVo" :key="item">
          <span
            class="item"
            :style="{
              color: item.color,
              backgroundColor: item.backgroundColor
            }"
            >{{ item.text }}</span
          >
        </template>
      </div>

      <div class="review">
        <div class="user">
          <div class="avatar">
            <img :src="comment.comment.userAvatars" alt="" />
          </div>
          <div class="profile">
            <div class="username">{{ comment.comment.userName }}</div>
            <div class="date">{{ comment.comment.checkInDate }}</div>
          </div>
        </div>
        <div class="comment-detail">
          {{ comment.comment.commentDetail }}
        </div>
      </div>
    </div>
  </BlockHeader>
</template>

<script setup>
import BlockHeader from '@/components/block-header/BlockHeader.vue'
defineProps({
  comment: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.comment {
  margin: 10px 0;
  box-sizing: border-box;

  .header {
    display: flex;

    .left {
      display: flex;
      align-items: center;

      .overall {
        width: 65px;
        color: #333;
        font-weight: 600;
        height: 100%;

        .text {
          font-size: 48px;
          position: relative;

          &::after {
            content: '';
            width: 66px;
            height: 6px;
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            border-radius: 3px;
            left: 5px;
            bottom: -5px;
            position: absolute;
          }
        }
      }

      .score {
        margin-left: 20px;
        font-size: 12px;
        color: #444;

        display: flex;
        flex-direction: column;

        .title {
          font-size: 14px;
        }
        .count {
          margin: 5px 0;
          color: #999;
        }
      }
    }

    .right {
      flex: 1;

      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;

      .item {
        margin-top: 10px;
        margin-left: 6px;
        font-size: 12px;
        color: #444;
      }
    }
  }

  .tags {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;

    .item {
      padding: 4px 6px;
      margin-right: 5px;
      margin-top: 5px;
      border-radius: 6px;
      font-size: 12px;
    }
  }

  .review {
    padding: 12px;
    background: #fafafa;
    border-radius: 6px;
    box-shadow: 0 0 4px rgba(161, 177, 204, 0.4);

    .user {
      display: flex;
      .avatar {
        img {
          width: 32px;
          height: 32px;
          -webkit-filter: grayscale(0.95);
          border-radius: 50%;
        }
      }
    }

    .profile {
      margin-left: 8px;
      font-size: 14px;

      .date {
        margin-top: 3px;
        font-size: 12px;
        color: #886;
      }
    }

    .comment-detail {
      font-size: 14px;
      line-height: 20px;
      color: #444;
    }
  }
}
</style>
