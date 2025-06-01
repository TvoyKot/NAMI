import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export const useRootStore = defineStore('root', () => {
  const allProducts = ref([
    {
      id: 1,
      imageUrl: '/public/rolls/roll-1.png',
      name: 'Ролл Ясай',
      weight: 185,
      description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут',
      price: 200,
      isAdded: false,
      isFavorite: false,
      category: 'Rolls'
    },
    {
      id: 2,
      imageUrl: '/public/rolls/roll-2.png',
      name: 'Мясные роллы',
      weight: 260,
      description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут',
      price: 240,
      isAdded: false,
      isFavorite: false,
      category: 'Sushi and gulkan'
    },
    {
      id: 3,
      imageUrl: '/public/rolls/roll-3.png',
      name: 'Ролл лайт',
      weight: 190,
      description: 'Листья салата, огурец, перец, помидор, сырный соус, чипсы',
      price: 165,
      isAdded: false,
      isFavorite: false,
      category: 'Sets'
    },
    {
      id: 4,
      imageUrl: '/public/rolls/roll-4.png',
      name: 'Ролл веган',
      weight: 230,
      description: 'Листья салата, авокадо, огурец, спаржа, сивид чука, кунжут',
      price: 200,
      isAdded: false,
      isFavorite: false,
      category: 'noodles'
    },
    {
      id: 5,
      imageUrl: '/public/rolls/roll-11.png',
      name: 'Ролл чиро',
      weight: 210,
      description: 'Листья салата, копченая курица, болгарский перец, твердый сыр, чесночный соус',
      price: 210,
      isAdded: false,
      isFavorite: false,
      category: 'Salats'
    },
    {
      id: 6,
      imageUrl: '/public/rolls/roll-6.png',
      name: 'Ролл тайол',
      weight: 215,
      description: 'Огурец, помидор, сыр творожный, бекон, сыр маасдам',
      price: 215,
      isAdded: false,
      isFavorite: false,
      category: 'Hots dishes'
    },
    {
      id: 7,
      imageUrl: '/public/rolls/roll-7.png',
      name: 'Ролл батакон',
      weight: 220,
      description: 'Огурец, сыр творожный, бекон',
      price: 230,
      isAdded: false,
      isFavorite: false,
      category: 'Sushi and gulkan'
    },
    {
      id: 8,
      imageUrl: '/public/rolls/roll-8.png',
      name: 'Ролл калипсо',
      weight: 195,
      description: 'Сыр творожный, огурец, мидии, стружка тунца',
      price: 285,
      isAdded: false,
      isFavorite: false,
      category: 'Noodles and rice'
    },
    {
      id: 9,
      imageUrl: '/public/rolls/roll-9.png',
      name: 'Ролл кавьяр',
      weight: 240,
      description: 'Сыр творожный, помидор, огурец, мидии, майонез',
      price: 200,
      isAdded: false,
      isFavorite: false,
      category: 'rolls'
    },
    {
      id: 10,
      imageUrl: '/public/rolls/roll-10.png',
      name: 'Ролл чипу',
      weight: 190,
      description: 'Сыр творожный, лосось, томаго, стружка тунца',
      price: 180,
      isAdded: false,
      isFavorite: false,
      category: 'salats'
    },
    {
      id: 11,
      imageUrl: '/public/rolls/roll-11.png',
      name: 'Ролл катана',
      weight: 240,
      description: 'Сыр творожный, краб, огурец, черный кунжут, лососевый тар-тар, спайси соус',
      price: 250,
      isAdded: false,
      isFavorite: false,
      category: 'salats'
    },
    {
      id: 12,
      imageUrl: '/public/rolls/roll-12.png',
      name: 'Ролл мишику',
      weight: 210,
      description: 'Угорь, краб, огурец, масаго, сыр творожный,  сырный соус, картофельные чипсы',
      price: 260,
      isAdded: false,
      isFavorite: false,
      category: 'Hot dishes'
    },
    {
      id: 13,
      imageUrl: '/public/rolls/roll-8.png',
      name: 'Ролл Банзай',
      weight: 185,
      description: 'Помидор, болгарский перец, листья салата, кунжут',
      price: 200,
      isAdded: false,
      isFavorite: false,
      category: 'Rolls'
    },
    {
      id: 14,
      imageUrl: '/public/rolls/roll-10.png',
      name: 'Ролл Самурай',
      weight: 185,
      description: 'Болгарский перец, листья салата, кунжут',
      price: 200,
      isAdded: false,
      isFavorite: false,
      category: 'Rolls'
    }
  ])

  const allConvertedProductsNewId = computed(() => {
    return allProducts.value.map((product) => {
      product.id = uuidv4()
      return product
    })
  })
  
  const rolls = ref([])
  const filters = reactive({
    sortBy: 'name',
    searchQuery: ''
  })
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
  const onChangeInput = (event) => {
    filters.searchQuery = event.target.value
  }
  const onChangeSelect = (event) => {
    filters.sortBy = event.target.value
  }

  return {
    fetchItems,
    onChangeInput,
    onChangeSelect,
    rolls,
    allProducts,
    allConvertedProductsNewId,
    filters
  }
})
