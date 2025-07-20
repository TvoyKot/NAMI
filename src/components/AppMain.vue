<script setup>
import { ref, onMounted } from 'vue'
import AppTabs from './AppTabs.vue'
import AppCardList from './AppCardList.vue'
import AppSuccessComponent from './AppSuccessComponent.vue'
import axios from 'axios'
import { TABS_API } from '../constants'
import { useCartStore } from '../store/useCartStore'
const cartStore = useCartStore()

const categories = ref([])
let selectedCategory = ref('Rolls')


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
  <main>
    <AppSuccessComponent v-if="cartStore.isSuccessPageOpen" />
    <section class="mx-auto mb-14">
      <AppTabs
        @select-category="selectCategory"
        :categories="categories"
        :selected-category="selectedCategory"
      />
      <AppCardList :selectedCategory="selectedCategory" />
    </section>
  </main>
</template>
