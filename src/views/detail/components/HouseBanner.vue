<template>
  <van-swipe :autoplay="3000" lazy-render ref="swipeRef">
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image.url" class="img" />
    </van-swipe-item>

    <template #indicator="{ active }">
      <div class="indicator">
        <template v-for="(value, key) in groupImage" :key="key">
          <span
            class="tile"
            @click="swipeTo(key)"
            :class="{ active: images[active]?.enumPictureCategory == key }"
          >
            {{ getTitle(value[0].title) }}
            <template v-if="images[active]?.enumPictureCategory == key"
              >({{ value.indexOf(images[active]) + 1 }}/{{ value.length }})</template
            >
          </span>
        </template>
      </div>
    </template>
  </van-swipe>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})

const groupImage = {}

for (const item of props.images) {
  let groupArr = groupImage[item.enumPictureCategory]
  if (!groupArr) {
    groupArr = []
    groupImage[item.enumPictureCategory] = groupArr
  }

  groupArr.push(item)
}

const swipeRef = ref()

const swipeTo = (type) => {
  // 根据点击类型，跳转到指定的类型去、从第一个开始播放
  let index = props.images.findIndex((item) => item.enumPictureCategory == type)
  swipeRef.value.swipeTo(index, {
    immediate: true
  })
}

const getTitle = (title) => {
  return title.substring(title.indexOf('【') + 1, title.indexOf('】'))
}
</script>

<style lang="less" scoped>
.img {
  width: 100%;
}

.indicator {
  position: absolute;
  font-size: 14px;
  color: white;
  right: 5px;
  border-radius: 6px;
  bottom: 8px;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  // padding: 6px;

  .tile {
    display: inline-block;
    height: 25px;
    line-height: 25px;
    padding: 0 5px;

    &.active {
      border-top: 4px solid var(--primary-color);
      // background: ;
    }
  }
}
</style>
