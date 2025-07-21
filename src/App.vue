<script setup>
import { computed, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppDrawer from './components/AppDrawer.vue'
import AppLikes from './components/AppLikes.vue'
import { useCartStore } from './store/useCartStore'
import { useLikeStore } from './store/useLikeStore'
const cartStore = useCartStore()
const likeStore = useLikeStore()

const disabledWindow = computed(() => {
  return cartStore.isDrawerOpen || likeStore.isLikesOpen
})

watch(disabledWindow, (newVal) => {
  if (newVal) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})
</script>

<template>
  <AppHeader />
  <AppMain  :class="{ 'overflow-hidden': disabledWindow }" />
  <AppDrawer v-if="cartStore.isDrawerOpen" />
  <AppLikes v-else-if="likeStore.isLikesOpen" />
</template>

<style>
* {
  box-sizing: border-box;
}
</style>
