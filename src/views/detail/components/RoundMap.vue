<template>
  <BlockHeader title="位置周边" more-text="发现更多周边信息">
    <div class="baidu" ref="bMapRef"></div>
  </BlockHeader>
</template>

<script setup>
import BlockHeader from '@/components/block-header/BlockHeader.vue'
import { onMounted, ref } from 'vue'

const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  }
})
const bMapRef = ref()

onMounted(() => {
  // 1.创建地图实例
  const map = new BMapGL.Map(bMapRef.value)

  let { longitude, latitude } = props.position
  // 2.创建坐标
  const point = new BMapGL.Point(longitude, latitude)

  // 3.设置中心点与缩放
  map.centerAndZoom(point, 12)

  const marker = new BMapGL.Marker(point)

  map.addOverlay(marker)
})
</script>

<style lang="less" scoped>
.baidu {
  height: 214px;
}
</style>
