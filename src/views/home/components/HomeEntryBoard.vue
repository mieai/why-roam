<template>
  <div class="entry-board">
    <!-- 城市选择 -->
    <LocationArea />

    <div class="date-range section" @click="showPickDate = true">
      <div class="start-date">
        <span class="sub-title">入住</span>
        <span class="time">{{ startDate }}</span>
      </div>
      <div class="stay-day">共{{ stayDay }}晚</div>
      <div class="end-date">
        <span class="sub-title">离店</span>
        <span class="time">{{ endDate }}</span>
      </div>
    </div>

    <van-calendar
      color="#fc7b5b"
      v-model:show="showPickDate"
      type="range"
      @confirm="onConfirm"
      :formatter="formatter"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import LocationArea from "./LocationArea.vue";

import { formatMonthDay, getDayDurtion } from "@/utils/format_date";
import { numberToChinese } from "@/utils/format_string";

const nowDate = new Date();

const startDate = ref(formatMonthDay(nowDate));

// 根据开始时间，获取明天不修改nowDate对象
const featDay = new Date(+nowDate).setDate(nowDate.getDate() + 1);

const endDate = ref(formatMonthDay(featDay));

const showPickDate = ref(false);

const stayDay = ref(numberToChinese(getDayDurtion(nowDate, featDay)));

const formatter = (day) => {
  if (day.type === "start") {
    day.bottomInfo = "入住";
  } else if (day.type === "end") {
    day.bottomInfo = "离店";
  }
  return day;
};

const onConfirm = (dates) => {
  startDate.value = formatMonthDay(dates[0]);
  endDate.value = formatMonthDay(dates[1]);
  stayDay.value = numberToChinese(getDayDurtion(...dates));

  showPickDate.value = false;
};
</script>

<style lang="less" scoped>
.entry-board {
  padding: 12px;

  .date-range {
    height: 44px;

    .stay-day {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: #666;
    }
  }

  .section {
    display: flex;
    align-items: center;

    padding: 8px 12px;
  }

  .start-date,
  .end-date {
    display: flex;
    flex-direction: column;

    .sub-title {
      font-size: 14px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
</style>
