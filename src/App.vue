<script setup>
import { useRoute } from 'vue-router'
import { RouterView } from 'vue-router'

import useTStore from '@/stores/app'

import TabBar from './components/tabbar/TabBar.vue'

import TLoading from './components/loading/TLoading.vue'

const route = useRoute()

const TStore = useTStore()
</script>

<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive include="HomePage">
      <component :is="Component"></component>
    </KeepAlive>
  </RouterView>

  <TabBar v-if="!route.meta.hideTabbar" />

  <TLoading v-if="TStore.loading" />
</template>

<style scoped></style>
