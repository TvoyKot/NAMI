import { defineStore } from 'pinia'
import { useCartStore } from '@/store/useCartStore'
import { useLikeStore } from '@/store/useLikeStore'

export const useCommonStore = defineStore('common', () => {
    const cartStore = useCartStore()
    const likeStore = useLikeStore()
  const openModal = (modal) => {
    switch (modal) {
      case 'cart':
        cartStore.isDrawerOpen = true
        break
      case 'likes':
        likeStore.isLikesOpen = true
        break
    }
  }

  const closeModal = (modal) => {
    switch (modal) {
      case 'cart':
        cartStore.isDrawerOpen = false
        break
      case 'likes':
        likeStore.isLikesOpen = false
        break
    }
  }
  return {
    openModal,
    closeModal
  }
})
