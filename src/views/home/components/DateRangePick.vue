<template>
  <div class="date-range section" @click="showPickDate = true">
    <div class="start-date">
      <span class="sub-title">入住</span>
      <span class="time">{{ zhStartDate }}</span>
    </div>
    <div class="stay-day">共{{ numberToChinese(stayDay) }}晚</div>
    <div class="end-date">
      <span class="sub-title">离店</span>
      <span class="time">{{ zhEndDate }}</span>
    </div>
  </div>
  <van-calendar
    color="#fc7b5b"
    v-model:show="showPickDate"
    type="range"
    @confirm="onConfirm"
    :formatter="formatter"
  />
</template>

<script setup>
import { ref } from "vue";

import { formatMonthDay, getDayDurtion } from "@/utils/format_date";
import { numberToChinese } from "@/utils/format_string";

import useTStore from "@/stores/app";
import { computed } from "vue";

let entry = useTStore().entry;

const zhStartDate = computed(() => formatMonthDay(entry.startDate));

const zhEndDate = computed(() => formatMonthDay(entry.endDate));

const stayDay = entry.stayDay;

const showPickDate = ref(false);

const formatter = (day) => {
  if (day.type === "start") {
    day.bottomInfo = "入住";
  } else if (day.type === "end") {
    day.bottomInfo = "离店";
  }
  return day;
};

const onConfirm = (dates) => {
  entry.startDate = dates[0];
  entry.endDate = dates[1];
  entry.stayDay = getDayDurtion(...dates);

  showPickDate.value = false;
};
</script>

<style lang="less" scoped>
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
</style>
