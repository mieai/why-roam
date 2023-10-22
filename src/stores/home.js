import { defineStore } from 'pinia'
import { getCategories, getHotSuggests, getHouseList } from '../service/home'

const useHomeStore = defineStore('home', {
  state() {
    return {
      hotSuggests: [],
      categories: [],
      currentPage: 1,
      houseList: []
    }
  },
  actions: {
    getHomeHotSuggests() {
      getHotSuggests().then((res) => {
        this.hotSuggests = res.data
      })
    },
    getHomeCategories() {
      getCategories().then((res) => {
        this.categories = res.data
      })
    },
    getHomeHouseList() {
      return getHouseList(this.currentPage++).then((res) => {
        let data = res.data || []
        this.houseList.push(...data)
      })
    }
  }
})

export default useHomeStore
