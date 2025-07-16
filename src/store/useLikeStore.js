import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLikesStore = defineStore('like', () => {
  const likes = ref([])
  const isLikesOpen = ref(false)

  const likedProduct = (product) => {
    return likes.value.find((productItem) => productItem.id === product.id)
  }

  const toggleLikes = () => {
    isLikesOpen.value = !isLikesOpen.value
  }

  //   const setFavoriteProduct = (product) => {
  //     likes.value.push(product)
  //   }

const handleLikes = (product) => {
  const index = likes.value.findIndex(p => p.id === product.id);
  
  if (index !== -1) {
    // Удаляем товар из массива лайков
    likes.value.splice(index, 1);
  } else {
    // Добавляем товар в массив лайков
    likes.value.push(product);
  }
};
//   const handleLikes = (product) => {
//     const likeProduct = likedProduct
//     console.log(likeProduct)
//     if (likeProduct) {
//       return likes.value.find((productItem) => productItem.id === product.id)
//     } else {
//       likes.value.push(product)
//     }
//   }

  const totalLikes = computed(() => {
    return likes.value.length
  })
  return {
    likes,
    isLikesOpen,
    totalLikes,
    likedProduct,
    toggleLikes,
    // setFavoriteProduct,
    handleLikes
  }
})
