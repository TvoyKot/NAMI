<script setup>
import { onMounted } from 'vue'

const emit = defineEmits(['onClickRemove'])

defineProps({
  id: Number,
  imageUrl: String,
  name: String,
  weight: Number,
  description: String,
  price: Number,
  isFavorite: Boolean,
  onClickRemove: Function
})

onMounted(() => {
  
})
</script>
<template>
       <div
            class="flex justify-between gap-6 p-4 mb-3 shadow-[0_0_15px_5px_rgba(0,0,0,0.2)] rounded-lg bg-white overflow-hidden relative"
          >
            <div>
              <img :src="imageUrl" alt="roll" />
            </div>
            <div class="w-56 flex flex-col justify-start relative">
              <img
                class="absolute top-1 right-8 cursor-pointer"
                :src="!isFavorite ? '/public/heart-icon.svg' : '/public/heart-full-icon.svg'"
                alt="heart"
              />
              <h2 class="text-xl">{{ name }}</h2>
              <p class="text-slate-400 text-lg">
                {{ description }}
              </p>
              <span class="text-xs text-slate-400">({{ weight }} г)</span>
            </div>
            <div class="flex flex-col justify-between mr-16">
              <span class="text-xl">Цена {{ price }} ₽</span>
              <div id="counter" class="flex justify-between">
                <button class="w-7 h-7 bg-black text-white rounded-full">-</button>
                <span>1</span>
                <button class="w-7 h-7 bg-black text-white rounded-full">+</button>
              </div>
              <span>Сумма: 200 ₽</span>
            </div>
            <button
            @click="emit('onClickRemove')"
              class="flex justify-start items-center absolute pl-4 w-20 h-20 top-2/4 -right-3 -translate-y-1/2 rounded-s-3xl bg-black overflow-hidden translate-x-5"
            >
              <img class="h-6 w-6 cursor-pointer" src="/public/trash-icon.svg" alt="trash" />
            </button>
          </div>
</template>