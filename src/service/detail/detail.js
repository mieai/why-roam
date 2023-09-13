import request from "../request";
export function getHouseDetail(houseId) {
  return request.get('/detail/infos', {
    params: {
      houseId
    }
  })
}