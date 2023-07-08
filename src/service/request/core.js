import { BASE_URL, TIME_OUT } from "../../config/env";

import axios from "axios";
class TRequest {
  constructor(BASE_URL, TIME_OUT) {
    this._instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT,
    });
  }

  request(config) {
    return this._instance.request(config);
  }

  get(url, options) {
    return this.request({
      url,
      method: "GET",
      ...options,
    });
  }

  post(url, options) {
    return this.request({
      url,
      method: "POST",
      ...options,
    });
  }
}

export default new TRequest(BASE_URL, TIME_OUT);
