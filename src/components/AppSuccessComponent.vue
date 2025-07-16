<script setup>
import AppCountTimer from './AppCountTimer.vue'
import { useCartStore } from '../store/useCartStore'
const cartStore = useCartStore()

const closeSuccessPage = () => {
  cartStore.isSuccessPageOpen = false
}
</script>
<template>
  <div v-if="cartStore.isSuccessPageOpen">
    <div class="w-full h-full flex justify-center items-center mb-10">
      <h1 class="text-4xl text-blue-950">Спасибо за заказ! Мы скоро с Вами свяжемся!</h1>
    </div>
    <div class="flex flex-column justify-center items-center">
      <AppCountTimer @endTimerCount="closeSuccessPage" :timeout="5" />
    </div>
  </div>
</template>
