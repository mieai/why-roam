import { defineStore } from "pinia";
import { getAllCity } from "../service/city/city";

const useCityStore  = defineStore('city',{
  state(){
    return {
      allCities:{}
    }
  },
  actions:{
    async getCitiesAction(){
      let result = await getAllCity()
      this.allCities = result.data;
    }
  }
})

export default useCityStore;