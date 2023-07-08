let BASE_URL = "";
if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = "http://123.207.32.32:1888/api";
} else {
  // 开发环境
  BASE_URL = "http://codercba.com:1888/api";
}

const TIME_OUT = 10000;

export { BASE_URL, TIME_OUT };
