<script setup>
import { computed } from 'vue'
import { useRootStore } from '../store/rootStore'
import AppCard from './AppCard.vue'

const rootStore = useRootStore()
const props = defineProps({
  selectedCategory: {
    type: String,
    required: true
  }
})
const filteredProducts = computed(() => {
  return rootStore.allConvertedProductsNewId.filter(
    (product) => product.category === props.selectedCategory
  )
})
</script>
<template>
  <div
    class="card flex gap-5 sm:gap-7 flex-wrap justify-center"
  >
    <AppCard
      v-for="product in filteredProducts"
      :key="product.id"
      :id="product.id"
      :imageUrl="product.imageUrl"
      :name="product.name"
      :weight="product.weight"
      :description="product.description"
      :price="product.price"
      :category="product.category"
    />
  </div>
</template>
<style>
</style>
