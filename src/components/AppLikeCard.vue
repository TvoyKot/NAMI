<script setup>
defineProps({
  id: String,
  image: String,
  name: String,
  weight: Number,
  description: String,
  price: Number
})
</script>
<template>
  <div
    class="flex flex-col gap-1 p-4 mb-3 shadow-[0_0_15px_5px_rgba(0,0,0,0.2)] rounded-lg bg-white overflow-hidden relative"
  >
      <div class=" mb-2">
        <img :src="image" alt="roll" />
      </div>
      <div class="flex justify-between items-center mb-1">
        <h2 class="text-xl">{{ name }}</h2>
        <span class="text-xs text-slate-400">({{ weight }} г)</span>
      </div>
      <p class="text-slate-400 mb-1">
        {{ description }}
      </p>
      <div class="flex justify-between items-center">
        <span class="text-xl">{{ price }} ₽</span>
      </div>
    </div>
</template>
