<script setup>
import { ref, computed, onMounted } from 'vue'
import { TABS_API } from './constants'
import axios from 'axios'
import { useCartStore } from './store/useCartStore'
import AppHeader from './components/AppHeader.vue'
import AppTabs from './components/AppTabs.vue'
import AppCardList from './components/AppCardList.vue'
import AppDrawer from './components/AppDrawer.vue'

const cartStore = useCartStore()
const categories = ref([])
let selectedCategory = ref('Rolls')

const disabledWindow = computed(() => {
  return cartStore.isDrawerOpen
    ? document.body.classList.add('overflow-hidden')
    : document.body.classList.remove('overflow-hidden')
})

const selectCategory = (category) => {
  selectedCategory.value = category
}
const getCategories = async () => {
  try {
    const response = await axios.get(`${TABS_API}`)
    const dataTabs = response.data
    categories.value = dataTabs
  } catch (err) {
    console.log(err)
  }
}
onMounted(() => {
  getCategories()
})
</script>

<template>
  <header class="shadow-xl bg-blue-950">
    <div class="w-4/5 mx-auto z-5">
      <AppHeader />
    </div>
  </header>
  <main :class="disabledWindow">
    <section class="w-3/5 mx-auto mb-14">
      <AppTabs
        @select-category="selectCategory"
        :categories="categories"
        :selected-category="selectedCategory"
      />
      <!-- <div class="flex justify-center gap-6 mb-14">
        <select class="w-1/4 border rounded-md p-2 cursor-pointer text-xl">
          <option value="name">По названию</option>
          <option value="price">По цене (Дешёвые)</option>
          <option value="-price">По цене (Дорогие)</option>
        </select>
        <div class="w-1/4 relative">
          <img class="absolute top-3 left-3" src="/public/search.svg" alt="search-icon" />
          <input
            class="w-full text-xl border pl-8 py-2 outline-none rounded-md cursor-pointer"
            type="text"
            placeholder="Поиск по названию..."
          />
        </div>
      </div> -->
      <AppCardList @on-click-favorite="addToFavorite" :selectedCategory="selectedCategory" />
    </section>
  </main>
  <div>
    <footer class="bg-blue-950"></footer>
  </div>
  <AppDrawer v-if="cartStore.isDrawerOpen" />
</template>

<style></style>
