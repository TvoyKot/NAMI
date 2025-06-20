<script setup>
import { computed } from 'vue'
import { useCartStore } from '../store/useCartStore'
import AppDrawerItem from './AppDrawerItem.vue'

const cartStore = useCartStore()    

const productsInCart = computed(() => {
  return cartStore.cart
})

</script>
<template>
  <AppDrawerItem
    v-for="item in productsInCart"
    :key="item.id"
    :id="item.id"
    :imageUrl="item.imageUrl"
    :name="item.name"
    :weight="item.weight"
    :description="item.description"
    :price="item.price"
    :quantity="item.quantity"
  />
</template>
