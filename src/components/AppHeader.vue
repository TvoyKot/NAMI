<script setup>
const emit = defineEmits(['openDrawer'])

defineProps({
  totalItems: Number
})
</script>
<template>
  <header class="text-white mb-24">
    <div class="flex-wrap pl-60 py-5 w-3/4 flex items-center justify-between mx-auto relative">
      <a href="#" class="absolute top-0 left-0">
        <img src="/public/favicon-logo.svg" alt="logo" />
      </a>
      <nav>
        <ul class="flex gap-9 mr-60 text-xl">
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
        <img src="/public/phone-icon.svg" alt="phone" />
        <a href="#">+7 979 700 97 91</a>
      </div>
      <a
        class="py-2 px-2 bg-white rounded-full mr-6 cursor-pointer relative"
        @click="() => emit('openDrawer')"
      >
        <span
        v-if="totalItems > 0"
          class="absolute bottom-5 text-sm right-5 rounded-full py-1 px-3 text-blue-950 bg-slate-200"
          >{{ totalItems }}</span
        >
        <img class="w-6" src="/public/cart-icon.svg" alt="cart" />
      </a>
      <a href="#" class="py-2 px-6 bg-white text-blue-950 rounded-3xl"> Войти </a>
    </div>
  </header>
</template>
<style></style>
