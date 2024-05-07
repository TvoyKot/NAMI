<script setup>
import AppCard from './AppCard.vue'

defineProps({
  rolls: Array
})

const emit = defineEmits(['addToFavorite', 'addToDrawer'])


</script>
<template>
  <div class="grid grid-cols-4 gap-x-4 gap-y-4">
    <AppCard
      v-for="item in rolls"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :name="item.name"
      :weight="item.weight"
      :description="item.description"
      :price="item.price"
      :is-added="item.isAdded"
      :isFavorite="item.isFavorite"
      :onClickFavorite="() => emit('addToFavorite', item)"
      :onClickAdd="() => addToDrawer(item)"
    />
  </div>
</template>
