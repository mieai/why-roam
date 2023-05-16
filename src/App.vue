<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />

  <router-link to="/">首页</router-link>
  <router-link to="/favor">收藏</router-link>
  <router-link to="/order">订单</router-link>
  <router-link to="/message">消息</router-link>
</template>

<style scoped></style>
