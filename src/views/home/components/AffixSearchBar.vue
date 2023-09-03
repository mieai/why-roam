<template>
  <div class="search-bar">
    <div class="search-inner">
      <div class="entry">
        <div class="flex-ly start-date">
          <div class="text">住</div>
          <div class="date">{{ formatMonthDay(entry.startDate, "MM.DD") }}</div>
        </div>
        <div class="flex-ly end-date">
          <div class="text">离</div>
          <div class="date">{{ formatMonthDay(entry.endDate, "MM.DD") }}</div>
        </div>
      </div>
      <div class="search-input">
        <div class="keyword">关键字/位置/民宿</div>
      </div>
      <div class="search-btn">
        <i class="icon-search"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import useTStore from "@/stores/app";
import { formatMonthDay } from "@/utils/format_date";

const entry = useTStore().entry;
</script>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  padding: 12px;
  background-color: #fff;
}

.search-inner {
  height: 44px;

  padding: 0 12px;
  display: flex;
  align-items: center;
  color: #999;
  border-radius: 6px;
  background-color: #f2f6f4;
  font-size: 14px;

  .entry {
    .start-date,
    .end-date {
      display: flex;
      font-size: 10px;

      .text {
        font-size: 10px;
      }

      .date {
        position: relative;
        color: #333;
        margin: 0px 6px;
        font-weight: 500;
      }
    }

    .end-date .date::after {
      content: " ";
      width: 0;
      height: 0;
      border: 4px solid #666;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      bottom: 0px;
      right: -12px;
    }
  }

  .search-input {
    padding: 12px;
    flex: 1;
    text-align: left;

    .keyword {
      font-size: 12px;
      max-width: 124px;
    }
  }

  .icon-search {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-image: url("@/assets/img/home/home-sprite.png");
    background-position: -29px -151px;
    background-size: 207px 192px;
  }
}

.flex-ly {
  display: flex;
  align-items: center;
}
</style>
