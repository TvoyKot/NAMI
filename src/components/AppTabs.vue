<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  selectedCategory: {
    type: String,
    required: true
  }
})
defineEmits({
  'select-category': null
})
</script>
<template>
  <h1
    class="w-60 text-uppercase text-black mx-auto text-center mb-12 text-6xl before:absolute before:-top-4 before:left-0 before:content-['.'] after:absolute before:text-black after:content-['.'] after:-top-4 after:right-0 after:text-black relative"
  >
    Меню
  </h1>
  <div class="px-10 mb-8">
    <ul class="flex justify-between items-center text-3xl flex-wrap">
      <li
        v-for="(category, index) in categories"
        @click="$emit('select-category', category.name)"
        :key="index"
        :class="{ active: selectedCategory === category.name }"
        class="cursor-pointer"
      >
        {{ category.label }}
      </li>
    </ul>
  </div>
</template>
<style>
.active {
  background-color: black;
  padding: 5px 15px;
  border-radius: 15px;
  color: white;
  cursor: pointer;
}
</style>
