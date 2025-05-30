<script setup>
import { inject } from 'vue'

import AppDrawerItem from './AppDrawerItem.vue'

const { drawerItems, removeFromDrawer } = inject('drawerActions')

</script>
<template>
  <AppDrawerItem
    v-for="item in drawerItems"
    :key="item.id"
    :id="item.id"
    :imageUrl="item.imageUrl"
    :name="item.name"
    :weight="item.weight"
    :description="item.description"
    :price="item.price"
    :isFavorite="item.isFavorite"
    @on-click-remove="() => removeFromDrawer(item)"
  />
</template>
