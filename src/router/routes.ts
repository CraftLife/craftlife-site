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
        component: () => import('@/views/HomeView.vue')
      }
    ]
  }
]

export default routes
