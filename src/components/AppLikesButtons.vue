<script setup>
import { useLikesStore } from '@/store/useLikeStore'
const likesStore = useLikesStore()

const closeLikes = () => {
  likesStore.toggleLikes()
}
</script>
<template>
  <div>
    <button
      @click="closeLikes()"
      class="shadow-xl py-5 px-7 text-black bg-white cursor-pointer hover:bg-black active:bg-gray-700 hover:text-white transition rounded-lg text-xl border-2"
    >
      Вернуться к покупкам
    </button>
  </div>
</template>
