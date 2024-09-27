<template>
  <div class="flex flex-col h-screen">
    <nav class="flex items-center gap-3 bg-primary-50 pr-[3rem] h-[4rem] shadow-sm border-b">
      <div class="flex items-center px-3 h-[4rem] gap-3 uppercase border-b min-w-[16rem] border-r">
        <img src="@/assets/imgs/logo-portal.svg" alt="" />
        <div
          class="flex flex-col items-center bg-gradient-to-t from-primary to-primary-700 bg-clip-text text-transparent"
        >
          <p class="font-semibold">CraftLife</p>
          <small class="text-xs">Portal staff</small>
        </div>
      </div>
      <h1>Dashboard</h1>
      <div class="flex items-center gap-3 ml-auto">
        <InputGroup class="w-[20rem] hidden lg:flex">
          <InputGroupAddon>
            <i class="pi pi-search"></i>
          </InputGroupAddon>
          <InputText placeholder="Pesquisar por.." />
        </InputGroup>

        <Button icon="pi pi-bell" text plain></Button>
        <div class="flex gap-2">
          <img class="min-w-[2.5rem] rounded-lg" :src="`https://mineskin.eu/helm/${user?.username}/64.svg`" />
          <div class="flex flex-col justify-center">
            <p>Brun0XP</p>
          </div>
        </div>
      </div>
    </nav>
    <div class="flex flex-1 overflow-hidden">
      <PortalLayoutSidebar />
      <div class="flex-1 p-3 overflow-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from '@/composables'

import PortalLayoutSidebar from '@/layouts/portal/PortalLayoutSidebar.vue'

const { user } = useAuth()
</script>
