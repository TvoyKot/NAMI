<script setup>
import AppLikeCard from './AppLikeCard.vue'
import { computed } from 'vue'
import { useLikesStore } from '../store/useLikeStore'
const likesStore = useLikesStore()

const productsInLikes = computed(() => {
    return likesStore.likes
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