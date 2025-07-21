<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/useCartStore'
const cartStore = useCartStore()

defineProps({
  showRegistrationOrder: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['proceedToPayment', 'hide-button-order'])

const handleProceedToPayment = () => {
  emit('proceedToPayment')
}

const closeDrawer = () => {
  cartStore.toggleDrawer()
}

const disabledButton = computed(() => {
  return cartStore.totalCarts < 2 ? true : false
})
</script>
<template>
  <div class="flex flex-col gap-3 lg:flex-row lg:justify-center items-center pb-1">
    <button
      @click="closeDrawer()"
      class="w-[214px] shadow-xl py-5 px-7 text-black bg-white cursor-pointer hover:bg-black active:bg-gray-700 hover:text-white transition rounded-lg text-lg border-2"
    >
      Вернуться к покупкам
    </button>
    <button
        v-if="!showRegistrationOrder"
      :disabled="disabledButton"
      @click="handleProceedToPayment"
      class="lg:ml-5 shadow-xl py-5 px-7 text-black bg-white cursor-pointer disabled:hover:text-black hover:bg-black active:bg-gray-700 disabled:bg-gray-400 hover:text-white transition rounded-lg text-lg border-2"
    >
      Оформить заказ
    </button>
  </div>
</template>
