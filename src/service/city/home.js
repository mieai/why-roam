import T from "../request";

// 获取首页热门关键字
export function getHotSuggests() {
  return T.get("/home/hotSuggests");
}

// 获取首页分类
export function getCategories() {
  return T.get("/home/categories");
}
