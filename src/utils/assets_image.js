/**
 * 
 * @param {*} image 相对路径
 * @returns 
 */
export default function assetsImage(image) {
  // import.meta.url 当前文件路径
  return new URL("../assets/img/" + image, import.meta.url).href;
}
