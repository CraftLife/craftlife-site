import { ref } from 'vue'

import { useFetch } from '@/composables'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'

interface User {
  email?: string
  roles: string[]
  username: string
}

interface LoginRequestBody {
  username: string
  password: string
}

interface FastLoginData {
  modalVisible: boolean
  response?: {
    token: string
    username: string
  }
}

const user = ref<User | null>(null)

export default function () {
  const { accessToken } = storeToRefs(useAuthStore())
  const router = useRouter()
  const toast = useToast()
  const fastLoginData = ref<FastLoginData>({ modalVisible: false })

  const login = (body: LoginRequestBody) => {
    useFetch('auth/login')
      .post(body)
      .json()
      .then(({ data, statusCode }) => {
        if (statusCode.value === 401) {
          toast.add({
            severity: 'error',
            summary: 'Falha ao realizar login',
            detail: 'Usuário ou senha invalidos!',
            life: 6000
          })
          return
        }
        accessToken.value = data.value.token
        fetchUser()
        router.push('/')
        toast.add({
          severity: 'success',
          summary: 'Sucesso!',
          detail: 'Login realizado com sucesso!',
          life: 6000
        })
      })
  }

  const fastLogin = () => {
    if (accessToken.value) return
    useFetch('auth/fast-login')
      .post()
      .json()
      .then(({ data }) => {
        if (data.value) {
          fastLoginData.value.modalVisible = true
          fastLoginData.value.response = data.value
        }
      })
  }

  const saveFastLoginToken = () => {
    if (fastLoginData.value.response) {
      accessToken.value = fastLoginData.value.response.token
      fastLoginData.value.modalVisible = false
      fetchUser()
    }
  }

  const logout = () => {
    accessToken.value = ''
    user.value = null
  }

  const fetchUser = () => {
    if (!accessToken.value) return
    useFetch('auth/session')
      .json()
      .then(({ data }) => {
        user.value = data.value
      })
  }

  return {
    login,
    fastLogin,
    saveFastLoginToken,
    logout,
    fetchUser,
    user,
    fastLoginData
  }
}
