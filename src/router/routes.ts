import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/',
    component: () => import('@/layouts/app/AppLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/app/HomeView.vue')
      },
      {
        path: '/store',
        name: 'Store',
        component: () => import('@/views/app/StoreView.vue')
      },
      {
        path: '/rules',
        name: 'Rules',
        redirect: () => {
          window.location.replace('https://williamestrela.gitbook.io/craftlife-ajuda/regras')
          return '/redirecting'
        }
      },
      {
        path: '/discord',
        name: 'Discord',
        redirect: () => {
          window.location.replace('https://discord.gg/txW4A47Dx6')
          return '/redirecting'
        }
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/app/ContactView.vue')
      },
      {
        path: '/checkout/:productId',
        name: 'Checkout',
        component: () => import('@/views/app/CheckoutView.vue')
      },
      {
        path: '/profile/:username',
        name: 'Profile',
        component: () => import('@/views/app/ProfileView.vue')
      },
      {
        path: '/validate-payment',
        name: 'ValidatePayment',
        component: () => import('@/views/portal/ValidatePaymentView.vue')
      }
    ]
  },
  {
    path: '/portal',
    component: () => import('@/layouts/portal/PortalLayout.vue'),
    children: [
      {
        path: '/portal',
        name: 'PortalDashboard',
        component: () => import('@/views/portal/DashboardView.vue')
      }
    ]
  }
]

export default routes
