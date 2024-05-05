<script setup></script>
<template>
  <div class="fixed top-0 left-0 w-full h-full z-10 bg-black/50 backdrop-blur-md"></div>
  <div
    class="flex flex-col justify-between p-8 bg-amber-100 w-2/6 h-full fixed top-0 right-0 opacity-100 z-20"
  >
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
              <img src="/public/rolls/roll-1.png" alt="roll" />
            </div>
            <div class="w-56 flex flex-col justify-start relative">
              <img
                class="absolute top-1 right-8 cursor-pointer"
                src="/public/heart-icon.svg"
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
      <p class="mb-10 w-96">
        * Сумма заказа для доставки курьером должна составлять не менее 500 ₽
      </p>
      <div>
        <button
          class="shadow-xl py-5 px-7 text-black bg-white cursor-pointer hover:bg-black hover:text-white transition rounded-lg text-xl border-2"
        >
          Вернуться к покупкам
        </button>
        <button
          class="shadow-xl py-5 px-7 text-black bg-white cursor-pointer hover:bg-black hover:text-white transition rounded-lg text-xl border-2"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>
<style></style>
