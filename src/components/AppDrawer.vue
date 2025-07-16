<script setup>
import AppDrawerButtons from './AppDrawerButtons.vue'
import AppPaymentForm from './AppPaymentForm.vue'
import AppDrawerList from './AppDrawerList.vue'
import AppInfoBlock from './AppInfoBlock.vue'
import { ref, computed } from 'vue'
import { useCartStore } from '../store/useCartStore'
const cartStore = useCartStore()

const totalAmount = computed(() => {
  return cartStore.totalAmount
})

const switchingForm = computed(() => {
  return !showRegistrationOrder.value ? 'Оформление заказа' : 'Корзина'
})

const proceedToPayment = () => {
  showRegistrationOrder.value = !showRegistrationOrder.value
}

let showRegistrationOrder = ref(true)
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full overflow-hidden z-10 bg-black/50 backdrop-blur-md"
  ></div>
  <div class="p-8 bg-amber-100 w-[613px] h-full overflow-y-scroll fixed top-0 right-0 opacity-100 z-20">
    <h1
      class="w-60 text-uppercase text-blue-950 mx-auto text-center mb-12 text-6xl before:absolute before:-top-4 before:left-0 before:content-['.'] after:absolute before:text-blue-950 after:content-['.'] after:-top-4 after:right-0 after:text-blue-950 relative"
    >
      {{ switchingForm }}
    </h1>
    <div class="flex flex-col justify-between h-full">
      <div v-if="showRegistrationOrder">
        <ul>
          <li>
            <AppDrawerList />
          </li>
        </ul>
        <div class="mt-auto">
          <p class="text-xl mb-10">Общая сумма {{ totalAmount }} ₽</p>
          <p class="mb-10 w-96">
            * Сумма заказа для доставки курьером должна составлять не менее 500 ₽
          </p>
        </div>
      </div>
      <div v-else>
        <AppPaymentForm v-if="!showRegistrationOrder" />
        <AppInfoBlock
          v-else
          title="Ваша корзина пуста!"
          description="Добавьте вкусные блюда в корзину"
          image-url="./public/package-icon.png"
        />
      </div>
    </div>
    <AppDrawerButtons @proceed-to-payment="proceedToPayment" />
  </div>
</template>
<style></style>
