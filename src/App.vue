<script setup></script>

<template>
  <!-- <div class="fixed top-0 left-0 w-full h-full z-10 bg-black/50 backdrop-blur-md"></div>
  <div class="flex flex-col justify-between p-8 bg-amber-100 w-2/6 h-full fixed top-0 right-0 opacity-100 z-20">
    <div>
      <h1
        class="w-60 text-uppercase text-blue-950 mx-auto text-center mb-12 text-6xl before:absolute before:-top-4 before:left-0 before:content-['.'] after:absolute before:text-blue-950 after:content-['.'] after:-top-4 after:right-0 after:text-blue-950 relative"
      >
        Корзина
      </h1>
      <ul>
        <li>
          <div
            class="flex justify-between gap-6 p-4 shadow-[0_0_15px_5px_rgba(0,0,0,0.2)] rounded-lg bg-white overflow-hidden relative"
          >
            <div>
              <img src="../public/rolls/roll-1.png" alt="roll" />
            </div>
            <div class="w-56 flex flex-col justify-start relative">
              <img
                class="absolute top-1 right-8 cursor-pointer"
                src="../public/heart-icon.svg"
                alt="heart"
              />
              <h2 class="text-xl">Ролл "Яссай"</h2>
              <p class="text-slate-400 text-lg">
                Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут
              </p>
              <span class="text-xs text-slate-400">(185 г)</span>
            </div>
            <div class="flex flex-col justify-between mr-16">
              <span class="text-xl">Цена 200 ₽</span>
              <div id="counter" class="flex justify-between">
                <button class="w-7 h-7 bg-black text-white rounded-full">-</button>
                <span>1</span>
                <button class="w-7 h-7 bg-black text-white rounded-full">+</button>
              </div>
              <span>Сумма: 200 ₽</span>
            </div>
            <div
              class="flex justify-start items-center absolute pl-4 w-20 h-20 top-2/4 -right-3 -translate-y-1/2 rounded-s-3xl bg-black overflow-hidden translate-x-5"
            >
              <img class="h-6 w-6 cursor-pointer" src="/public/trash-icon.svg" alt="trash" />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <p class="text-xl mb-10">Общая сумма 16995 ₽</p>
      <p class="mb-10 w-96">* Сумма заказа для доставки курьером должна составлять не менее 500 ₽</p>
      <div>
        <button class="shadow-xl py-5 px-7 text-black bg-white cursor-pointer hover:bg-black hover:text-white transition rounded-lg text-xl border-2">Вернуться к покупкам</button>
        <button class="shadow-xl py-5 px-7 text-black bg-white cursor-pointer hover:bg-black hover:text-white transition rounded-lg text-xl border-2">Оформить заказ</button>
      </div>
    </div>
  </div> -->
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
