<script setup>
import AppLikesButtons from './AppLikesButtons.vue'
import AppLikesList from './AppLikesList.vue';
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full overflow-hidden z-10 bg-black/50 backdrop-blur-md"
  ></div>
  <div class="p-2 lg:p-8 bg-amber-100  w-[320px] lg:w-[500px]  h-full overflow-y-scroll fixed top-0 right-0 opacity-100 z-20">
    <h1
      class="w-60 text-uppercase text-blue-950 mx-auto text-center mb-12 text-3xl lg:px-4 lg:text-6xl lg:before:absolute lg:before:-top-4 lg:before:left-0 lg:before:content-['.'] lg:after:absolute lg:before:text-blue-950 lg:after:content-['.'] lg:after:-top-3 lg:after:right-[-78px] lg:after:text-blue-950
      before:absolute before:-top-2 before:left-8 before:content-['.'] after:absolute before:text-blue-950 after:content-['.'] after:-top-2 after:right-[34px] after:text-blue-950 relative"
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
