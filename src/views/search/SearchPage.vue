<template>
  <div>search</div>
  <div>{{ TStore.entry }}</div>
</template>

<script setup>
import useTStore from '@/stores/app'

const TStore = useTStore()
</script>

<style lang="less" scoped></style>
