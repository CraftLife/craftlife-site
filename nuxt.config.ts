// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: ['https://unpkg.com/@phosphor-icons/web']
    }
  },
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth', '@nuxtjs/tailwindcss'],
  auth: {
    provider: {
      type: 'local',
      pages: {
        login: '/login'
      }
    },
    baseURL: 'http://localhost:8080/auth'
    // globalAppMiddleware: {
    //   isEnabled: true,
    // }
  }
})
