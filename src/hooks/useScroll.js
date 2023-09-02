import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore';
export function useScroll(){
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  const scrollTop = ref(0);

  let isReachBottom = ref(false);

  const scrollHandler = throttle(()=>{
    let el = document.documentElement;
    clientHeight.value  = el.clientHeight;
    scrollHeight.value = el.scrollHeight;
    scrollTop.value = el.scrollTop;

    const delta = clientHeight.value + scrollTop.value;
    console.log('执行次数n')
    if(delta >= scrollHeight.value){
      console.log('滚动到底部了')
      isReachBottom.value = true;
    }
  },300)

  onMounted(()=>{
    window.addEventListener('scroll',scrollHandler)
  })

  onUnmounted(()=>{
    window.removeEventListener('scroll',scrollHandler)
  })

 
  

  return { isReachBottom,clientHeight,scrollHeight,scrollTop}
}
