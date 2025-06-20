<script setup>
import { computed } from 'vue'
import AppQuantityBlock from './AppQuantityBlock.vue'
import { useCartStore } from '../store/useCartStore'
const cartStore = useCartStore()
const props = defineProps({
  id: String,
  imageUrl: String,
  name: String,
  weight: Number,
  description: String,
  price: Number,
  quantity: Number
})

const isPriceProduct = computed(() => {
  return props.price
})
const incrementQuantity = (id) => {
  cartStore.incrementQuantity(id)
}

const decrementQuantity = (id) => {
  if (props.quantity === 1) {
    return
  } else {
    cartStore.decrementQuantity(id)
  }
}

const removeProduct = (id) => {
  cartStore.removeProductInCart(id)
}
</script>
<template>
  <div
    class="flex justify-between gap-6 p-4 mb-3 shadow-[0_0_15px_5px_rgba(0,0,0,0.2)] rounded-lg bg-white overflow-hidden relative"
  >
    <div>
      <img :src="imageUrl" alt="roll" />
    </div>
    <img src="/public/heart-icon.svg" class="absolute top-1 left-2 cursor-pointer" alt="heart" />
    <div class="w-56 flex flex-col justify-start relative">
      <h2 class="text-xl">{{ name }}</h2>
      <p class="text-slate-400 text-lg">
        {{ description }}
      </p>
      <span class="text-xs text-slate-400">({{ weight }} г)</span>
    </div>
    <div class="flex flex-col justify-between mr-16">
      <span class="text-xl">Цена {{ price }} ₽</span>
      <div id="counter" class="flex justify-between">
        <AppQuantityBlock
          :quantity="quantity"
          @decrement="decrementQuantity(props.id)"
          @increment="incrementQuantity(props.id)"
        />
      </div>
      <span>Сумма: {{ isPriceProduct }} ₽</span>
    </div>
    <button
      @click="removeProduct(props.id)"
      class="flex justify-start items-center absolute pl-4 w-20 h-20 top-2/4 -right-3 -translate-y-1/2 rounded-s-3xl bg-black overflow-hidden translate-x-5"
    >
      <img class="h-6 w-6 cursor-pointer" src="/public/trash-icon.svg" alt="trash" />
    </button>
  </div>
</template>
