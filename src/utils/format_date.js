import dayjs from 'dayjs'
export function formatMonthDay(date, format = 'MM月DD日') {
  return dayjs(date).format(format)
}

export function getDayDurtion(d1, d2) {
  return dayjs(d2).diff(d1, 'day')
}
