<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/useCartStore'
import { useLikesStore } from '@/store/useLikeStore'
const cartStore = useCartStore()
const likeStore = useLikesStore()

const openDrawer = () => {
  cartStore.toggleDrawer()
}

const openLikes = () => {
  likeStore.toggleLikes()
}

const isProductDrawer = computed(() => {
  return cartStore.totalCarts
})

const isProductInLikes = computed(() => {
  return likeStore.totalLikes
})
</script>
<template>
  <header class=" text-white mb-24">
    <div class="header pl-60 w-[1100px] flex items-center justify-between mx-auto relative py-7">
      <a href="#" class="absolute left-0 top-[-16px]">
        <img class="w-[182px] h-[182px]" src="/public/favicon-logo.svg" alt="logo" />
      </a>
      <nav>
        <ul class="flex text-base header-list gap-9">
          <li>
            <a href="#">Меню</a>
          </li>
          <li>
            <a href="#">Доставка</a>
          </li>
          <li>
            <a href="#">Акции</a>
          </li>
          <li>
            <a href="#">Отзывы</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-2 mr-auto ml-20">
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.984 12.6533C14.8172 11.7232 13.6332 11.1599 12.4808 12.0885L11.7927 12.6498C11.2892 13.0572 10.3531 14.9608 6.73382 11.0805C3.11531 7.20508 5.26863 6.60168 5.77286 6.19777L6.46475 5.63581C7.61113 4.70506 7.17851 3.53338 6.3517 2.32728L5.85275 1.59673C5.02217 0.393437 4.11773 -0.396817 2.96834 0.532522L2.3473 1.03828C1.8393 1.38319 0.419334 2.50429 0.0748931 4.63412C-0.339641 7.18962 0.968026 10.116 3.96398 13.3269C6.95617 16.5392 9.88579 18.1527 12.6609 18.1246C14.9672 18.1015 16.3601 16.948 16.7957 16.5287L17.419 16.0222C18.5654 15.0936 17.8531 14.1481 16.6857 13.2159L15.984 12.6533Z"
            fill="white"
          />
        </svg>
        <a href="#">+7 979 700 97 91</a>
      </div>
      <a @click="openDrawer" class="w-[42px] h-[42px] py-2 px-2 bg-white rounded-full mr-2 cursor-pointer relative">
        <span
          v-if="isProductDrawer"
          class="absolute bottom-5 text-sm right-5 rounded-full py-1 px-3 text-blue-950 bg-slate-200"
          >{{ isProductDrawer }}</span
        >
        <img class="m-auto w-5" src="/public/cart-icon.svg" alt="cart" />
      </a>
      <a @click="openLikes" class="w-[42px] h-[42px] py-2 px-2 bg-white rounded-full mr-6 cursor-pointer relative">
        <span
          v-if="isProductInLikes"
          class="absolute bottom-5 text-sm right-5 rounded-full py-1 px-3 text-blue-950 bg-slate-200"
          >{{ isProductInLikes }}</span
        >
        <img
          class="w-6"
          :src="isProductInLikes ? '/public/heart-full-icon.svg' : '/public/heart-icon.svg'"
          alt="cart"
        />
      </a>
      <a href="#" class="py-2 px-6 bg-white text-blue-950 rounded-3xl"> Войти </a>
    </div>
  </header>
</template>
<style>
.header-list li{
  position: relative;
  display: inline-block;
}
.header-list li:not(:last-child)::after {
  content: url('../public/ellipse.svg');
  position: absolute;
  right: -16px;
  bottom: 3px;
}
@media (max-width: 768px) {
  .header {
    flex-direction: column;
  }
}
</style>
