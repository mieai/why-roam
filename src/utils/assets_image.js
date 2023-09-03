export default function assetsImage(image) {
  // params1 相对路径
  // import.meta.url 当前文件路径
  return new URL("../assets/img/" + image, import.meta.url).href;
}
