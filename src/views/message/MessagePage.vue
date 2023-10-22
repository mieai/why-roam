<template>
  <van-nav-bar title="消息" left-text="T" left-arrow @click-left="onBack" />
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const onBack = () => {
  router.back()
}
</script>

<style lang="less" scoped></style>
