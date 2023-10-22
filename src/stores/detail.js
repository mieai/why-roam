import { defineStore } from 'pinia'

import { getHouseDetail } from '../service/detail/detail'
const useDetailStore = defineStore('detail', {
  state() {
    return {
      houseDetail: {}
    }
  },
  actions: {
    getDetailByHouseId(houseId) {
      getHouseDetail(houseId).then((res) => {
        this.houseDetail = res.data
      })
    }
  }
})

export default useDetailStore
