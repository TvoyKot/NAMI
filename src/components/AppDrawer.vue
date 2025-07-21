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
  return showRegistrationOrder.value ? 'Оформление заказа' : 'Корзина'
})


let showRegistrationOrder = ref(false)

const openForm = () => {
  showRegistrationOrder.value = true
}

const closeForm = () => {
  showRegistrationOrder.value = false
}
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full overflow-hidden z-10 bg-black/50 backdrop-blur-md"
  ></div>
  <div
    class="p-2 lg:p-8 bg-amber-100 w-[320px] lg:w-[500px] h-full overflow-y-scroll fixed top-0 right-0 opacity-100 z-20"
  >
    <h1
      class="w-60 text-uppercase text-blue-950 mx-auto text-center mb-12 text-3xl lg:text-6xl lg:before:absolute lg:before:-top-4 lg:before:left-0 lg:before:content-['.'] lg:after:absolute lg:before:text-blue-950 lg:after:content-['.'] lg:after:-top-4 lg:after:right-0 lg:after:text-blue-950 before:absolute before:-top-2 before:left-14 before:content-['.'] after:absolute before:text-blue-950 after:content-['.'] after:-top-2 after:right-14 after:text-blue-950 relative"
    >
      {{ switchingForm }}
    </h1>
    <div class="flex flex-col justify-between h-full">
      <div v-if="!showRegistrationOrder">
        <ul>
          <li>
            <AppDrawerList />
          </li>
        </ul>
        <div class="mt-auto">
          <p class="text-xl mb-4 lg:mb-10">Общая сумма {{ totalAmount }} ₽</p>
          <p class="inline-block mb-4 lg:mb-10 lg:w-96">
            * Сумма заказа для доставки курьером должна составлять не менее 500 ₽
          </p>
        </div>
      </div>
      <div v-else>
        <AppPaymentForm v-if="showRegistrationOrder"/>
        <AppInfoBlock v-else
          title="Ваша корзина пуста!"
          description="Добавьте вкусные блюда в корзину"
          image-url="./public/package-icon.png"
          />
        </div>
        <AppDrawerButtons
        :show-registration-order="showRegistrationOrder"
          @proceed-to-payment="openForm"
          @hide-button-order="closeForm"
        />
    </div>
  </div>
</template>
<style></style>
