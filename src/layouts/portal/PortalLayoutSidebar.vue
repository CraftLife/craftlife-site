<template>
  <div class="min-h-full bg-primary-50 w-[16rem] border-r">
    <div class="flex items-center px-3 h-[4rem] gap-3 uppercase border-b">
      <img src="@/assets/imgs/logo-portal.svg" alt="" />
      <div
        class="flex flex-col items-center bg-gradient-to-t from-primary to-primary-700 bg-clip-text text-transparent"
      >
        <p class="font-semibold">CraftLife</p>
        <small class="text-xs">Portal staff</small>
      </div>
    </div>
    <div class="p-3">
      <ul class="flex flex-col gap-1">
        <li v-for="item in sidebarItems" class="bg-primary-100 px-3 py-2 rounded-lg flex items-center gap-2">
          <i :class="item.icon"></i>
          <span>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
  <!-- <div class="flex flex-col items-start min-h-full w-[280px] py-2 gap-3">
    <div class="flex items-center gap-3 w-full">
      <img class="min-w-[3rem] rounded-lg" :src="`https://mineskin.eu/helm/${user?.username}/64.svg`" />
      <div class="flex-grow w-1">
        <p class="font-semibold overflow-ellipsis">
          {{ user?.username }}
        </p>
        <p class="truncate">{{ user?.email }}</p>
      </div>
      <Button icon="pi pi-chevron-down" text plain @click="menu.toggle($event)"></Button>
      <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
    <div class="w-full border-b-2 border-surface-200"></div>
    <ul class="w-full flex flex-col gap-2 overflow-auto">
      <template v-for="item in sidebarItems">
        <RouterLink
          v-if="item.roles.some((role) => user?.roles.includes(role))"
          is="li"
          :to="item.path"
          class="flex items-center px-3 py-2 gap-2 rounded-lg"
          :class="{ ['bg-surface-50 border border-surface-200 shadow-sm']: route.path === item.path }"
        >
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </RouterLink>
      </template>
    </ul>
  </div> -->
</template>

<script lang="ts" setup>
const sidebarItems = [
  {
    name: 'Dashboard',
    path: '/portal/dashboard',
    icon: 'pi pi-home',
    roles: ['ADMIN']
  },
  {
    name: 'Jogadores',
    path: '/portal/user',
    icon: 'pi pi-users',
    roles: ['ADMIN']
  },
  {
    name: 'Loja',
    path: '/portal/store',
    icon: 'pi pi-shopping-cart',
    roles: ['ADMIN']
  },
  {
    name: 'Moderação',
    path: '/portal/moderation',
    icon: 'pi pi-shield',
    roles: ['ADMIN']
  },
  {
    name: 'Mundos',
    path: '/portal/worlds',
    icon: 'pi pi-globe',
    roles: ['ADMIN']
  },
  {
    name: 'Plugins',
    path: '/portal/plugins',
    icon: 'pi pi-folder',
    roles: ['ADMIN']
  },
  {
    name: 'Economia',
    path: '/portal/money',
    icon: 'pi pi-money-bill',
    roles: ['ADMIN']
  },
  {
    name: 'Auditoria',
    path: '/portal/audit',
    icon: 'pi pi-file',
    roles: ['ADMIN']
  },
  {
    name: 'Configurações',
    path: '/portal/config',
    icon: 'pi pi-cog',
    roles: ['ADMIN']
  },
  {
    name: 'Tickets',
    path: '/portal/tickets',
    icon: 'pi pi-ticket',
    roles: ['ADMIN']
  },
  {
    name: 'Relatórios',
    path: '/portal/report',
    icon: 'pi pi-chart-line',
    roles: ['ADMIN']
  },
  {
    name: 'Alertas',
    path: '/portal/alerts',
    icon: 'pi pi-bell',
    roles: ['ADMIN']
  }
]
</script>
