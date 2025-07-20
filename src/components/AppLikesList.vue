<script setup>
import AppLikeCard from './AppLikeCard.vue'
import { computed } from 'vue'
import { useLikeStore } from '../store/useLikeStore'
const likeStore = useLikeStore()

const productsInLikes = computed(() => {
    return likeStore.likes
})
</script>
<template>
    <AppLikeCard
    v-for="product in productsInLikes"
    :key="product.id"
    :image="product.imageUrl"
    :description="product.description"
    :name="product.name"
    :weight="product.weight"
    :price="product.price"
    />
</template>