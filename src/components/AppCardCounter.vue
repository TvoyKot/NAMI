<script setup>
import { ref, inject } from 'vue'

defineProps({
  isAdded: Boolean,
})

const { removeFromDrawer } = inject('drawerActions')

const counter = ref(1)

const increaseCount = () => {
  if (counter.value === 99) {
    return
  } else {
    counter.value += 1
  }
}

const decreaseCount = () => {
  if (counter.value === 1) {
    removeFromDrawer();
  } else {
    counter.value -= 1;
  }
}
</script>
<template>
  <span
    @click="decreaseCount()"
    class="text-white text-xl py-2 mr-3 rounded-full px-2 bg-blue-950 cursor-pointer"
    >-</span
  >
  <span>{{ counter }}</span>
  <span
    @click="increaseCount()"
    class="text-white text-xl py-2 ml-3 rounded-full px-2 bg-blue-950 cursor-pointer"
    >+</span
  >
</template>
