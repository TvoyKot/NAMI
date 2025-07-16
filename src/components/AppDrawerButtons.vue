<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/useCartStore'
const cartStore = useCartStore()

const emit = defineEmits(['proceedToPayment'])

const closeDrawer = () => {
  cartStore.toggleDrawer()
}

const disabledButton = computed(() => {
  return cartStore.totalCarts < 2 ? true : false
})
</script>
<template>
  <div>
    <button
      @click="closeDrawer()"
      class="shadow-xl py-5 px-7 text-black bg-white cursor-pointer hover:bg-black active:bg-gray-700 hover:text-white transition rounded-lg text-xl border-2"
    >
      Вернуться к покупкам
    </button>
    <button
      :disabled="disabledButton"
      @click="emit('proceedToPayment')"
      class="ml-7 shadow-xl py-5 px-7 text-black bg-white cursor-pointer disabled:hover:text-black hover:bg-black active:bg-gray-700 disabled:bg-gray-400 hover:text-white transition rounded-lg text-xl border-2"
    >
      Оформить заказ
    </button>
  </div>
</template>
