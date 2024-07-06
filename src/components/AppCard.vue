<script setup>
import AppCardCounter from './AppCardCounter.vue'

defineProps({
  id: Number,
  imageUrl: String,
  name: String,
  weight: Number,
  description: String,
  price: Number,
  isAdded: Boolean,
  isFavorite: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function,
})
</script>

<template>
  <div
    class="p-7 shadow-[0_0_15px_5px_rgba(0,0,0,0.2)] rounded-lg bg-white relative hover:shadow-[0_0_15px_5px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition"
  >
    <div class="flex justify-center mb-6">
      <img :src="imageUrl" alt="roll" />
      <img
        class="absolute top-8 right-8 cursor-pointer"
        @click="onClickFavorite"
        :src="!isFavorite ? '/public/heart-icon.svg' : '/public/heart-full-icon.svg'"
        alt="heart"
      />
    </div>
    <div class="flex justify-between mb-7">
      <h2 class="text-xl">{{ name }}</h2>
      <span class="text-xs text-slate-400">{{ weight }} г</span>
    </div>
    <p class="text-slate-400 mb-12">
      {{ description }}
    </p>
    <div class="flex justify-between items-center">
      <span class="text-xl">{{ price }} ₽</span>
      <div>
        <button
          v-if="!isAdded"
          @click="onClickAdd()"
          class="py-2 px-8 text-white text-base rounded-lg bg-blue-950 hover:bg-blue-800 active:bg-blue-900 cursor-pointer"
        >
          В корзину
        </button>
        <div v-else>
         <AppCardCounter />
        </div>
      </div>
    </div>
  </div>
</template>
