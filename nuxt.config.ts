// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Craftlife - Servidor de minecraft Survival e Creative - 1.8 até 1.20.x',
      meta: [
        {
          name: 'description',
          content: 'Craftlife - Servidor de minecraft Brasileiro na versão 1.8.x - 1.19.x'
        },
        {
          name: 'keywords',
          content:
            'Servidor de Minecraft Brasileiro, Servidor de Minecraft 1.20.1, Survival, PVP, Creative, EggWars, SkyWars, SkyBlock, KitPVP, Como jogar Minecraft Online, Servidor de minecraft ultima versao, servidor mcpe brasileiro'
        }
      ],
      script: ['https://unpkg.com/@phosphor-icons/web', 'https://sdk.mercadopago.com/js/v2']
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:8080',
      mercadopagoPublicKey: 'APP_USR-4b1cbcc0-6b15-4984-af69-4832390959ca'
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
  }
})
