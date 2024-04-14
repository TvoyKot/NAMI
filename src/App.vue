<script setup></script>

<template>
  <div class="shadow-xl bg-blue-950">
    <div class="w-4/5 mx-auto z-5">
      <header class="text-white mb-24">
        <div class="pl-60 py-5 w-3/4 flex items-center justify-between mx-auto relative">
          <a href="#" class="absolute top-0 left-0">
            <img src="../public/favicon-logo.svg" alt="logo" />
          </a>
          <nav>
            <ul class="flex gap-9 mr-60">
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
            <img src="../public/phone-icon.svg" alt="phone" />
            <a href="#">+7 979 700 97 91</a>
          </div>
          <a class="py-2 px-2 bg-white rounded-full mr-6 cursor-pointer relative">
            <span
              class="absolute bottom-5 text-sm right-5 rounded-full py-1 px-3 text-blue-950 bg-slate-200"
              >1</span
            >
            <img src="../public/cart-icon.svg" alt="cart" />
          </a>
          <a href="#" class="py-2 px-6 bg-white text-blue-950 rounded-3xl"> Войти </a>
        </div>
      </header>
    </div>
  </div>
  <main>
    <div class="w-3/5 mx-auto">
        <h1 class="w-60 text-uppercase text-blue-950 mx-auto text-center mb-12 text-6xl before:absolute before:-top-4 before:left-0 before:content-['.'] after:absolute before:text-blue-950 after:content-['.'] after:-top-4 after:right-0 after:text-blue-950 relative">
            Меню
        </h1>
        <div class="px-10 mb-14">
            <ul class="flex justify-between items-center text-3xl">
                <li class="hover:bg-black hover:text-white py-4 px-8 rounded-full cursor-pointer transition">
                    <a href="#">Роллы</a>
                </li>
                <li class="hover:bg-black hover:text-white py-4 px-8 rounded-full cursor-pointer transition">
                    <a href="#">Суши и гунканы</a>
                </li>
                <li class="hover:bg-black hover:text-white py-4 px-8 rounded-full cursor-pointer transition">
                    <a href="#">Сеты</a>
                </li>
                <li class="hover:bg-black hover:text-white py-4 px-8 rounded-full cursor-pointer transition">
                    <a href="#">Лапша и рис</a>
                </li>
                <li class="hover:bg-black hover:text-white py-4 px-8 rounded-full cursor-pointer transition">
                    <a href="#">Салаты</a>
                </li>
                <li class="hover:bg-black hover:text-white py-4 px-8 rounded-full cursor-pointer transition">
                    <a href="#">Горячие блюда</a>
                </li>
            </ul>
        </div>
        <div class="p-7 shadow-[0_0_15px_5px_rgba(0,0,0,0.2)] w-64 rounded-lg bg-white relative hover:shadow-[0_0_15px_5px_rgba(0,0,0,0.5)] transition">
            <div class="flex justify-center mb-6">
                <img src="../public/rolls/roll-1.png" alt="roll">
                <img class="absolute top-8 right-8 cursor-pointer" src="../public/heart-icon.svg" alt="heart">
            </div>
            <div class="flex justify-between mb-7">
                <h2 class="text-xl">Ролл "Яссай"</h2>
                <span class="text-xs text-slate-400">185 г</span>
            </div>
            <p class="text-slate-400 mb-12">Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут</p>
            <div class="flex justify-between items-center">
                <span class="text-xl">200 ₽</span>
                <button class="py-2 px-8 text-white text-base rounded-lg bg-blue-950 hover:bg-blue-800 active:bg-blue-900 cursor-pointer">В корзину</button>
            </div>
        </div>
    </div>
  </main>
</template>

<style></style>
