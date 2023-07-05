<template>
   <div class="area">
      <div class="city" @click="jumpToCity">东莞</div>
      <div class="location" @click="getLocation">
        <span>我的位置</span>
        <img class="l-icon" src="@/assets/img/home/icon_location.png" alt="_">
      </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
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
  }

  .location{
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666;

    .l-icon{
      width: 21px;
      margin-left: 5px;
    }
  }
}
</style>