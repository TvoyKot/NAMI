<script setup>
defineProps({
    imageUrl: String,
    title: String,
    description: String
})
</script>
<template>
    <div class="flex flex-col items-center text-center text-4xl text-blue-950 mt-20">
        <img :src="imageUrl" alt="icon-drawer-empty">
        <p>{{ title }}</p>
        <p>{{ description }}</p>
    </div>
</template>