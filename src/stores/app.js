import { defineStore } from "pinia";


import { getDayDurtion } from "@/utils/format_date";

const nowDate = new Date();
// 根据开始时间，获取明天不修改nowDate对象
const featDay = new Date(+nowDate);
featDay.setDate(nowDate.getDate() + 1)

const stayDay = getDayDurtion(nowDate, featDay)

const useTStore = defineStore('app', {
  state() {
    return {
      loading: false,
      entry: {
        startDate: nowDate,
        endDate: featDay,
        stayDay: stayDay
      }
    }
  }
})

export default useTStore;