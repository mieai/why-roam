<template>
  <BlockHeader title="房东介绍" more-text="查看房东主页">
    <div class="landlord">
      <div class="top-level">
        <img :src="landlord.topScroll" />
      </div>

      <div class="profile">
        <div class="left">
          <div class="avatar">
            <img :src="landlord.hotelLogo" alt="" />
          </div>
          <div class="hotel">
            <div class="hotelName">{{ landlord.hotelName }}</div>
            <div class="tags">
              <template v-for="(item, index) in landlord.hotelTags" :key="index">
                <div
                  class="item"
                  :style="{
                    color: item.tagText.color
                  }"
                >
                  <span>{{ item.tagText.text }}</span>
                  <span v-if="index !== landlord.hotelTags.length - 1" class="divider"></span>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="right"><div class="contact">联系房东</div></div>
      </div>
      <div class="bottom">
        <template v-for="item in landlord.hotelSummary" :key="item">
          <div class="item">
            <div class="title">{{ item.title }}</div>
            <div class="intro">{{ item.introduction }}</div>
            <div class="tip">{{ item.tip }}</div>
          </div>
        </template>
      </div>
    </div>
  </BlockHeader>
</template>

<script setup>
defineProps({
  landlord: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.landlord {
  .top-level {
    img {
      width: 100%;
      border-radius: 4px;
    }
  }
  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .left {
      display: flex;
      align-items: center;

      .avatar {
        margin-right: 5px;

        img {
          width: 54px;
          height: 54px;
          border-radius: 50%;
        }
      }
    }

    .right {
      .contact {
        height: 24px;
        line-height: 24px;
        border-radius: 5px;
        font-size: 12px;
        color: #fff;
        padding: 0px 7px;
        background: rgb(215, 175, 168) !important;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
      }
    }

    .hotelName {
      font-size: 16px;
      font-weight: 600;
    }
    .tags {
      display: flex;
      margin-top: 5px;
      font-size: 12px;

      .divider {
        margin: 0 5px;
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 12px;
  }

  .item {
    font-size: 12px;

    .title {
      color: #886;
    }

    .intro {
      margin: 5px 0;
      font-size: 18px;
      color: #444;
      font-weight: bold;
    }

    .tip {
      color: #555;
    }
  }
}
</style>
