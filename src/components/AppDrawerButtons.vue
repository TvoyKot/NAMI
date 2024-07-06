<script setup>
import { inject, computed } from 'vue'


const { closeDrawer, createOrder, isCreatingOrder, isDrawerEmpty } = inject('drawerActions')

const disabledButton = computed(() => isCreatingOrder.value || isDrawerEmpty.value ? true : false)

</script>
<template>
  <div>
    <button
      @click="closeDrawer()"
      class="shadow-xl py-5 px-7 text-black bg-white cursor-pointer hover:bg-black active:bg-gray-700 hover:text-white transition rounded-lg text-xl border-2"
    >
      Вернуться к покупкам
    </button>
    <button
      @click="createOrder()"
      :disabled="disabledButton"
      :is-creating-order="isCreatingOrder"
      class="shadow-xl py-5 px-7 text-black bg-white cursor-pointer disabled:hover:text-black hover:bg-black active:bg-gray-700 disabled:bg-gray-400 hover:text-white transition rounded-lg text-xl border-2"
    >
      Оформить заказ
    </button>
  </div>
</template>
