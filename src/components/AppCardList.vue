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
  <div class="grid grid-cols-4 gap-x-4 gap-y-4">
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
