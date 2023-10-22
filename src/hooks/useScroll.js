import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'
export function useScroll(targetRef) {
  let el = window
  const clientHeight = ref(0)
  const scrollHeight = ref(0)
  const scrollTop = ref(0)

  let isReachBottom = ref(false)

  const scrollHandler = throttle(() => {
    let offsetEl = el
    // 如果，window，就去document.documentElement中获取信息
    if (offsetEl == window) {
      offsetEl = document.documentElement
    }

    clientHeight.value = offsetEl.clientHeight
    scrollHeight.value = offsetEl.scrollHeight
    scrollTop.value = offsetEl.scrollTop

    const delta = clientHeight.value + scrollTop.value

    // console.log('count', scrollHeight.value, clientHeight.value, scrollTop.value);
    // 如果自身高度 + 当前的滚动的距离 > 滚动高度
    if (delta >= scrollHeight.value) {
      console.log('滚动到底部了')
      isReachBottom.value = true
    }
  }, 300)

  onMounted(() => {
    if (targetRef) el = targetRef.value
    el.addEventListener('scroll', scrollHandler)
  })

  onUnmounted(() => {
    el.removeEventListener('scroll', scrollHandler)
  })

  return { isReachBottom, clientHeight, scrollHeight, scrollTop }
}
