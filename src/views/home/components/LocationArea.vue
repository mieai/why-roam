<template>
   <div class="area">
      <div class="city" @click="jumpToCity">{{ currentCity.cityName || '定位城市' }}</div>
      <div class="location" @click="getLocation">
        <span>我的位置</span>
        <van-icon name="location-o" color="#ff761e" class="l-icon" size="22px"/>
      </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import useCityStore from '@/stores/city';
import { storeToRefs } from 'pinia';

const router = useRouter()

const cityStore = useCityStore();


const { currentCity } = storeToRefs(cityStore);

const getLocation = ()=>{
  navigator.geolocation.getCurrentPosition((info)=>{
    console.log(info);
  },()=>{

  })
}

const jumpToCity = ()=>{
  router.push('/city')
}

</script>

<style lang="less" scoped>
.area{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:8px 12px;
  

  .city{
    flex: 1;
    color: #323233;
  }

  .location{
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #666;

    .l-icon{
      margin-left: 3px;
    }
  }
}
</style>