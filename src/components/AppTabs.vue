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
    class="text-sm sm:text-3xl md:text-4xl md:w-40 lg:w-60 text-uppercase text-black mx-auto text-center mb-4 lg:mb-12 lg:text-6xl lg:before:absolute lg:before:-top-4 lg:before:left-0 lg:before:content-['.'] lg:after:absolute lg:before:text-black lg:after:content-['.'] lg:after:-top-4 lg:after:right-0 lg:after:text-black    
    sm:w-20 sm:before:absolute sm:before:top-[-10px] sm:before:left-0 sm:before:content-['.'] sm:after:absolute sm:after:content-['.'] sm:after:-top-[10px] sm:after:right-0 sm:after:text-black 
    w-16 before:absolute before:top-[-5px] before:left-0 before:content-['.'] after:absolute after:content-['.'] after:top-[-5px] after:right-0 after:text-black relative"
  >
    Меню
  </h1>
  <div class="px-10 mb-8">
    <ul class="flex justify-center gap-4 sm:gap-3 items-center lg:text-2xl lg:justify-center lg:gap-3 xl:text-3xl flex-wrap">
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
