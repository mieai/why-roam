import request from '../request'

// 获取所有城市
export const getAllCity = () => request.get('/city/all')
