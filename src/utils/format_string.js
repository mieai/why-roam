export function numberToChinese(num) {
  const chineseNums = ['零', '一', '两', '三', '四', '五', '六', '七', '八', '九'];
  return num.toString().split('').map(n => chineseNums[parseInt(n)]).join('');
}