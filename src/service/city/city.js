import T from "../request/core";

// 获取所有城市
export const getAllCity = () => T.get("/city/all");
