<script setup>
import { onMounted, ref, reactive, provide, watch } from 'vue'

import axios from 'axios'

// import AppDrawer from './components/AppDrawer.vue'
import AppHeader from './components/AppHeader.vue'
import AppTabs from './components/AppTabs.vue'
import AppCardList from './components/AppCardList.vue'


const rolls = ref([])

const filters = reactive({
  sortBy: 'name',
  searchQuery: ''
})

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeInput = (event) => {
  filters.searchQuery = event.target.value
}

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id
      }
      item.isFavorite = true

      const { data } = await axios.post(`https://e32a30db69781a0a.mokky.dev/favorites`, obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://e32a30db69781a0a.mokky.dev/favorites/${item.favoriteId}`)
    }
    console.log(item)
  } catch (err) {
    console.log(err)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://e32a30db69781a0a.mokky.dev/favorites`)
    rolls.value = rolls.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.parentId === item.id)
      if (!favorite) {
        return item
      }
      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.name = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://e32a30db69781a0a.mokky.dev/rolls`, {
      params
    })

    rolls.value = data
  } catch (err) {
    console.log(err)
  }
}

provide('addToFavorite', addToFavorite)

onMounted(async () => {
  await fetchItems(), await fetchFavorites()
})

watch(filters, fetchItems)
</script>

<template>
  <AppDrawer />
  <div class="shadow-xl bg-blue-950">
    <div class="w-4/5 mx-auto z-5">
      <AppHeader />
    </div>
  </div>
  <main>
    <section class="w-3/5 mx-auto mb-14">
      <h1
        class="w-60 text-uppercase text-black mx-auto text-center mb-12 text-6xl before:absolute before:-top-4 before:left-0 before:content-['.'] after:absolute before:text-black after:content-['.'] after:-top-4 after:right-0 after:text-black relative"
      >
        Меню
      </h1>
      <AppTabs />
      <div class="flex justify-center gap-6 mb-14">
        <select @change="onChangeSelect" class="w-1/4 border rounded-md p-2 cursor-pointer text-xl">
          <option value="name">По названию</option>
          <option value="price">По цене (Дешёвые)</option>
          <option value="-price">По цене (Дорогие)</option>
        </select>
        <div class="w-1/4 relative">
          <img class="absolute top-3 left-3" src="/public/search.svg" alt="search-icon" />
          <input
            @input="onChangeInput"
            class="w-full text-xl border pl-8 py-2 outline-none rounded-md cursor-pointer"
            type="text"
            placeholder="Поиск по названию..."
          />
        </div>
      </div>
      <AppCardList :rolls="rolls" @addToFavorite="addToFavorite" />
    </section>
  </main>
</template>

<style></style>
