<script setup>
defineProps({
  quantity: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['decrement', 'increment'])
</script>
<template>
  <div class="flex items-center gap-2">
    <span
           @click="emit('decrement')"

      class="text-white text-xl py-2 mr-3 rounded-full px-2 bg-blue-950 cursor-pointer"
      >-</span
    >
    <span>{{ quantity }}</span>
    <span
     @click="emit('increment')"
      class="text-white text-xl py-2 ml-3 rounded-full px-2 bg-blue-950 cursor-pointer"
      >+</span
    >
  </div>
</template>
