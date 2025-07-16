<script setup>
import { ref, reactive, computed } from 'vue'
import { useCartStore } from '../store/useCartStore'
const cartStore = useCartStore()

const form = reactive({
  name: '',
  tel: '',
  info: '',
  deliveryMethod: '',
  originalPrice: cartStore.totalAmount
})

const nameError = ref('')
const telError = ref('')

const finalPrice = computed(() => {
  const price = form.originalPrice
  if (form.deliveryMethod === 'pickup') {
    return price * 0.9
  } else {
    return price
  }
})

const formattedOriginalPrice = computed(() => {
  const parts = form.originalPrice.toFixed(2).split('.')
  return parts
})

const formattedPrice = computed(() => {
  const parts = finalPrice.value.toFixed(2).split('.')
  return parts
})

const validateName = () => {
  const pattern = /[^A-Za-zA-Яа-яЁё]/g
  let filteredName = form.name.replace(pattern, '')
  if (filteredName.length > 0 ) {
    filteredName = filteredName.charAt(0).toUpperCase() + filteredName.slice(1)
  }
  if (filteredName !== form.name) {
    form.name = filteredName
    nameError.value = 'Имя не должно содержать цифры и пробелы'
  } else {
    nameError.value = ''
  }
}

const blockNonDigits = (event) => {
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab']
  const pattern = /^[\d+]$/
  if (!pattern.test(event.key) && !allowedKeys.includes(event.key)) {
    telError.value = 'Телефон должен содержать только цифры'
    event.preventDefault()
  }
}

const validatePhone = () => {
  let tel = form.tel
  if (tel.length < 10) {
    telError.value = 'Телефон должен содержать не менее 10 цифр'
    return
  }
  const match = /^[\d+]*$/.test(tel)
  if (!match) {
    telError.value = 'Телефон должен содержать только цифры'
  } else {
    telError.value = ''
  }
}

const resetForm = () => {
  form.name = ''
  form.tel = ''
  form.info = ''
  form.deliveryMethod = ''
  form.originalPrice = cartStore.totalAmount
}

const submitPayment = () => {
  resetForm()
  cartStore.isSuccessPageOpen = true
  cartStore.isDrawerOpen = false
  cartStore.cart = []
}

const disabledButton = computed(() => {
  return form.name.length < 2 || form.tel.length < 11 || !form.deliveryMethod
})
</script>
<template>
  <div>
    <form @submit.prevent="submitPayment" class="flex flex-col gap-4 w-full">
      <div class="w-[540px] rounded-[8px] px-16 pt-4 pb-7 bg-white relative">
        <p class="font-light text-[22px] mb-4">
          <span class="number-form rounded-full text-[20px]">1</span>Способ доставки
        </p>
        <div class="flex items-center">
          <div class="mr-[20px] radio">
            <input
              type="radio"
              name="option"
              value="delivery"
              id="delivery"
              v-model="form.deliveryMethod"
            />
          </div>
          <svg
            class="mr-[40px] delivery-icon"
            width="30"
            height="30"
            stroke="#222222"
            stroke-width="0.1px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3_983)">
              <path
                d="M22.6575 17.8362C20.5723 17.8362 18.876 19.5325 18.876 21.6177C18.876 23.7029 20.5723 25.3992 22.6575 25.3992C24.743 25.3992 26.439 23.7029 26.439 21.6177C26.439 19.5325 24.7427 17.8362 22.6575 17.8362ZM22.6575 23.5085C21.6148 23.5085 20.7667 22.6604 20.7667 21.6177C20.7667 20.575 21.6148 19.7269 22.6575 19.7269C23.7002 19.7269 24.5483 20.575 24.5483 21.6177C24.5483 22.6605 23.7002 23.5085 22.6575 23.5085Z"
                fill="#A5A5A5"
              />
              <path
                d="M9.73758 17.8362C7.6524 17.8362 5.95605 19.5325 5.95605 21.6177C5.95605 23.7029 7.6524 25.3992 9.73758 25.3992C11.8228 25.3992 13.5191 23.7029 13.5191 21.6177C13.5191 19.5325 11.8228 17.8362 9.73758 17.8362ZM9.73758 23.5085C8.69484 23.5085 7.84682 22.6604 7.84682 21.6177C7.84682 20.575 8.69484 19.7269 9.73758 19.7269C10.78 19.7269 11.6283 20.575 11.6283 21.6177C11.6283 22.6605 10.7803 23.5085 9.73758 23.5085Z"
                fill="#A5A5A5"
              />
              <path
                d="M25.2042 7.01218C25.0435 6.69296 24.7167 6.49158 24.3594 6.49158H19.3804V8.38234H23.7764L26.3506 13.5025L28.0404 12.6529L25.2042 7.01218Z"
                fill="#A5A5A5"
              />
              <path d="M19.8213 20.7036H12.668V22.5944H19.8213V20.7036Z" fill="#A5A5A5" />
              <path
                d="M6.90133 20.7036H3.62406C3.10187 20.7036 2.67871 21.1268 2.67871 21.649C2.67871 22.1712 3.10193 22.5943 3.62406 22.5943H6.90139C7.42357 22.5943 7.84674 22.1711 7.84674 21.649C7.84674 21.1268 7.42351 20.7036 6.90133 20.7036Z"
                fill="#A5A5A5"
              />
              <path
                d="M29.8016 14.9243L27.942 12.5294C27.7634 12.2987 27.4876 12.1638 27.1955 12.1638H20.3257V5.54618C20.3257 5.02399 19.9025 4.60083 19.3804 4.60083H3.62406C3.10187 4.60083 2.67871 5.02405 2.67871 5.54618C2.67871 6.06831 3.10193 6.49153 3.62406 6.49153H18.435V13.1092C18.435 13.6314 18.8582 14.0545 19.3803 14.0545H26.7325L28.1093 15.828V20.7037H25.4938C24.9716 20.7037 24.5484 21.1269 24.5484 21.649C24.5484 22.1712 24.9716 22.5944 25.4938 22.5944H29.0547C29.5769 22.5944 30 22.1712 30.0001 21.649V15.5042C30.0001 15.2943 29.9301 15.0901 29.8016 14.9243Z"
                fill="#A5A5A5"
              />
              <path
                d="M6.83807 15.9138H2.4893C1.96711 15.9138 1.54395 16.337 1.54395 16.8592C1.54395 17.3814 1.96717 17.8045 2.4893 17.8045H6.83801C7.3602 17.8045 7.78336 17.3813 7.78336 16.8592C7.78342 16.337 7.3602 15.9138 6.83807 15.9138Z"
                fill="#A5A5A5"
              />
              <path
                d="M9.0126 12.1954H0.945352C0.423223 12.1954 0 12.6187 0 13.1408C0 13.663 0.423223 14.0862 0.945352 14.0862H9.0126C9.53479 14.0862 9.95795 13.663 9.95795 13.1408C9.95795 12.6187 9.53479 12.1954 9.0126 12.1954Z"
                fill="#A5A5A5"
              />
              <path
                d="M10.5565 8.47693H2.4893C1.96711 8.47693 1.54395 8.90015 1.54395 9.42228C1.54395 9.94447 1.96717 10.3676 2.4893 10.3676H10.5565C11.0787 10.3676 11.5019 9.94441 11.5019 9.42228C11.502 8.90015 11.0787 8.47693 10.5565 8.47693Z"
                fill="#A5A5A5"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_983">
                <rect width="30" height="30" fill="black" />
              </clipPath>
            </defs>
          </svg>

          <label class="mr-[104px] text-[18px] font-light line-height-[100%]" for="delivery"
            >Курьер</label
          >
          <span class="text-[12px] text-[#FF0000]">Временно недоступно</span>
        </div>

        <div class="flex items-center">
          <div class="radio">
            <input
              class="mr-[20px]"
              type="radio"
              name="option"
              value="pickup"
              id="pickup"
              v-model="form.deliveryMethod"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#222222"
            class="w-[30px] h-[30px] mr-[40px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <label class="text-[18px] font-light line-height-[100%] mr-[78px]" for="pickup"
            >Самовывоз</label
          >
          <div class="flex flex-col">
            <span class="font-bold text-[14px]">Скидка - 10% </span>
            <span class="text-[8px]">на стоимость покупки</span>
          </div>
        </div>
      </div>
      <div class="w-[540px] rounded-[8px] px-16 pt-4 pb-7 bg-white relative">
        <p class="font-light text-[22px] mb-4">
          <span class="number-form rounded-full text-[20px]">2</span>Данные для доставки
        </p>
        <div class="flex flex-col">
          <div class="input-wrapper relative">
            <img src="/public/icon-user.svg" class="absolute left-0" alt="icon-user" srcset="" />
            <input
              id="name"
              v-model="form.name"
              @input="validateName"
              type="text"
              placeholder="Имя"
              class="pl-[45px] text-base text-[#4C4C4C] w-full border-b border-[#FF0000]"
            />
            <span class="text-[12px] text-[#FF0000]">{{ nameError }}</span>
          </div>
          <div class="input-wrapper relative">
            <img src="/public/phone-icon.svg" class="absolute left-0" alt="icon-user" />

            <input
              id="tel"
              v-model="form.tel"
              @input="validatePhone"
              @keydown="blockNonDigits"
              type="text"
              placeholder="Телефон"
              class="pl-[45px] text-base text-[#4C4C4C] w-full border-b border-[#FF0000]"
            />
            <span v-if="telError" class="text-[12px] text-[#FF0000]">{{ telError }}</span>
          </div>
          <div class="input-wrapper relative">
            <img src="/public/warnin-icon.svg" class="absolute left-0" alt="icon-user" srcset="" />

            <input
              id="info"
              v-model="form.info"
              type="text"
              placeholder="Дополнительная информация"
              class="pl-[45px] text-base text-[#4C4C4C] w-full border-b border-[#FF0000]"
            />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center w-[540px] rounded-[8px] px-[16px] py-[32px] bg-white relative"
      >
        <div class="w-[430px] mb-10">
          <p class="border-b border-[#D9D9D9] pb-5 mb-5 text-[18px] font-light">
            Стоимость товаров <span class="ml-[45px]"> {{ formattedOriginalPrice[0] }} .</span
            ><span>{{ formattedOriginalPrice[1] }}</span>
          </p>
          <p class="text-[18px] font-bold">
            Итого к оплате
            <span class="ml-[45px]">
              {{ formattedPrice[0] }}.
              <span class="text-[16px]">{{ formattedPrice[1] }}</span></span
            >
          </p>
        </div>
        <button
          :disabled="disabledButton"
          class="bg-[#0C334A] py-[16px] w-full text-white rounded-[4px] text-lg mb-5 disabled:bg-gray-400 active:bg-[#0C334A]"
        >
          Купить и оплатить
        </button>
        <p class="font-light text-[12px]">
          Создавая заказ, вы соглашаетесь с <a href="#">политикой обработки персональных данных</a>
        </p>
      </div>
    </form>
  </div>
</template>
<style scoped>
input[type='radio'] {
  appearance: none;
  position: relative;
  width: 32px;
  height: 32px;
  background: #ffffff;
  border-radius: 100px;
  border: 0.3px solid #cccccc;
  transition: 500ms;
}
input[type='radio']:checked::after {
  content: '\2714';
  position: absolute;
  width: 32px;
  height: 32px;
  font-size: 12px;
  transition: 500ms;
  overflow: hidden;
  color: white;
  text-align: center;
  top: 50%;
  transform: translateY(-30%);
}
input[type='radio']:checked {
  background-color: #0acf83;
}
input[type='radio']:checked::after {
  width: 30px;
  height: 30px;
  transition: 500ms;
}
.radio {
  margin-top: 5px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}
.number-form {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 16px;
  left: 16px;
  text-align: center;
  vertical-align: middle;
  padding: 2px 10px;
  color: white;
  background-color: #d34a44;
}
.input-wrapper input::placeholder {
  font-size: 16px;
  font-weight: 300;
  color: #4c4c4c;
}
.input-wrapper input:focus {
  outline: none;
}
.input-wrapper:not(:last-child) {
  margin-bottom: 40px;
}
p a {
  color: #0c334a;
}
</style>
