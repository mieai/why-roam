<script setup>
import { RouterView } from "vue-router";
import TabBar from "./components/tabbar/TabBar.vue";

import { useRoute } from "vue-router";

const route = useRoute();


</script>

<template>
  <RouterView />

  <TabBar v-if="!route.meta.hideTabbar" />
</template>

<style scoped></style>
