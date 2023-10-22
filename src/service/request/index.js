import { BASE_URL, TIME_OUT } from '../../config/env'

import axios from 'axios'
import store from '@/stores'
import useTStore from '@/stores/app'

import '@/stores/app'

const TStore = useTStore(store)
class TRequest {
  constructor(BASE_URL, TIME_OUT) {
    this._instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT
    })

    this._instance.interceptors.request.use((config) => {
      TStore.loading = true
      return config
    })

    this._instance.interceptors.response.use(
      (response) => {
        TStore.loading = false
        return response.data
      },
      (error) => {
        TStore.loading = false
        return error
      }
    )
  }

  request(config) {
    return this._instance.request(config)
  }

  get(url, options) {
    return this.request({
      url,
      method: 'GET',
      ...options
    })
  }

  post(url, options) {
    return this.request({
      url,
      method: 'POST',
      ...options
    })
  }
}

export default new TRequest(BASE_URL, TIME_OUT)
