import { ref } from 'vue'

import { useFetch } from '@/composables'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'
import { useRouter } from 'vue-router'

interface LoginRequestBody {
  username: string
  password: string
}

const user = ref()

export default function () {
  const { accessToken } = storeToRefs(useAuthStore())
  const router = useRouter()

  const login = (body: LoginRequestBody) => {
    useFetch('auth/login')
      .post(body)
      .json()
      .then(({ data }) => {
        accessToken.value = data.value.token
        fetchUser()
        router.push('/')
      })
  }

  const fetchUser = () => {
    useFetch('auth/session')
      .json()
      .then(({ data }) => {
        user.value = data.value
      })
  }

  return {
    login,
    user,
    fetchUser
  }
}
