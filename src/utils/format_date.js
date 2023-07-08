import dayjs from "dayjs"
export function formatMonthDay(date){
  return dayjs(date).format("MM月DD日")
}

export function getDayDurtion(d1,d2){
  return dayjs(d2).diff(d1,'day');
}