<script setup>
import { inject } from 'vue'

const { closeDrawer } = inject('drawerActions')
</script>
<template>
  <div>
    <button
    @click="closeDrawer()"
      class="shadow-xl py-5 px-7 text-black bg-white cursor-pointer hover:bg-black hover:text-white transition rounded-lg text-xl border-2"
    >
      Вернуться к покупкам
    </button>
    <button
      class="shadow-xl py-5 px-7 text-black bg-white cursor-pointer hover:bg-black hover:text-white transition rounded-lg text-xl border-2"
    >
      Оформить заказ
    </button>
  </div>
</template>
