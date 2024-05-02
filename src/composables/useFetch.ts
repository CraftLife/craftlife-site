import { createFetch } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'

const useFetch = createFetch({
  baseUrl: process.env.VITE_API_URL,
  options: {
    async beforeFetch({ options }) {
      const { accessToken } = storeToRefs(useAuthStore())

      if (accessToken.value) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${accessToken.value}`
        }
      }

      return { options }
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
})

export default useFetch
