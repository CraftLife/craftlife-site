import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'

const instance = axios.create({
  baseURL: process.env.VITE_API_URL, // Defina a URL base da sua API
  timeout: 10000, // Defina um tempo limite para as requisições
  headers: {
    'Content-Type': 'application/json'
  }
})

// Configuração de interceptores (opcional)
instance.interceptors.request.use(
  (config) => {
    // Adicionar token de autenticação, etc.
    const { accessToken } = storeToRefs(useAuthStore())
    if (accessToken.value) {
      config.headers.Authorization = `Bearer ${accessToken.value}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Tratar erros de resposta, como redirecionar para login em caso de 401, etc.
    if (error.response && error.response.status === 401) {
      // Redirecionar para login ou tomar outras ações
    }
    return Promise.reject(error)
  }
)

export default instance
