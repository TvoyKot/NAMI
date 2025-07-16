<script setup>
import { computed } from 'vue'
import { useCartStore } from '../store/useCartStore'
import { useLikesStore } from '../store/useLikeStore'
import { useQuantity } from '../hooks/quantity'
import AppQuantityBlock from './AppQuantityBlock.vue'
const cartStore = useCartStore()
const likesStore = useLikesStore()
const [quantity, incrementQuantity, decrementQuantity] = useQuantity()

const props = defineProps({
  id: String,
  imageUrl: String,
  name: String,
  weight: Number,
  description: String,
  price: Number
})

const product = computed(() => {
  return {
    id: props.id,
    imageUrl: props.imageUrl,
    name: props.name,
    weight: props.weight,
    description: props.description,
    price: props.price,
    quantity
  }
})

const like = () => {
  likesStore.handleLikes(product.value)
}

const addToCart = () => {
  cartStore.setProductToCart(product.value)
}

const isProductInCart = computed(() => {
  return cartStore.productInCart(props.id) !== undefined
})

const isLikedProduct = computed(() => {
  return likesStore.likedProduct(product.value)
})
</script>

<template>
  <div
    class="flex flex-col justify-between p-7 shadow-[0_0_15px_5px_rgba(0,0,0,0.2)] rounded-lg bg-white relative hover:shadow-[0_0_15px_5px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition"
  >
    <div class="flex justify-center mb-6">
      <img :src="imageUrl" alt="roll" />
      <img
        class="absolute top-8 right-8 cursor-pointer"
        @click="like"
        :src="!isLikedProduct  ? '/public/heart-icon.svg' : '/public/heart-full-icon.svg'"
        alt="heart"
      />
    </div>
    <div class="flex justify-between items-center mb-7">
      <h2 class="text-xl">{{ name }}</h2>
      <span class="text-xs text-slate-400">{{ weight }} г</span>
    </div>
    <p class="text-slate-400 mb-12">
      {{ description }}
    </p>
    <div class="flex justify-between items-center">
      <span class="text-xl">{{ price }} ₽</span>

      <button
        v-if="!isProductInCart"
        @click="addToCart"
        class="py-2 px-8 text-white text-base rounded-lg bg-blue-950 hover:bg-blue-800 active:bg-blue-900 cursor-pointer"
      >
        В корзину
      </button>
      <div v-else>
        <AppQuantityBlock
          :quantity="quantity"
          @decrement="decrementQuantity"
          @increment="incrementQuantity"
        />
      </div>
    </div>
  </div>
</template>
