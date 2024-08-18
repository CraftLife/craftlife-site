import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'

import router from '@/router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Ripple from 'primevue/ripple'

import TrickyTrails from '@/themes/TrickyTrails'
import ptPrimevueLocale from '@/locales/primevue.json'

import '@/assets/styles.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: TrickyTrails,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  },
  ripple: true,
  locale: ptPrimevueLocale
})
app.use(ToastService)

app.directive('ripple', Ripple)

app.mount('#app')
