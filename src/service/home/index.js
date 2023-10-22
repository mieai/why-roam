import request from '../request'

// 获取首页热门关键字
export function getHotSuggests() {
  return request.get('/home/hotSuggests')
}

// 获取首页分类
export function getCategories() {
  return request.get('/home/categories')
}

// 获取首页房源列表数据
export function getHouseList(page) {
  return request.get('/home/houselist', {
    params: {
      page
    }
  })
}
