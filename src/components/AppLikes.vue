<script setup>
import AppLikesButtons from './AppLikesButtons.vue'
import AppLikesList from './AppLikesList.vue';
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full overflow-hidden z-10 bg-black/50 backdrop-blur-md"
  ></div>
  <div class="p-8 bg-amber-100 w-2/6 h-full overflow-y-scroll fixed top-0 right-0 opacity-100 z-20">
    <h1
      class="w-60 text-uppercase text-blue-950 mx-auto text-center mb-12 text-6xl before:absolute before:-top-4 before:left-0 before:content-['.'] after:absolute before:text-blue-950 after:content-['.'] after:-top-4 after:right-0 after:text-blue-950 relative"
    >
      Понравилось
    </h1>
    <div class="flex flex-col justify-between">
      <div>
        <div>
          <ul>
            <li>
              <AppLikesList />
            </li>
          </ul>
        </div>
      </div>

      <AppLikesButtons />
    </div>
  </div>
</template>
