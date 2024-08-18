<template>
  <div class="flex min-h-screen">
    <PortalLayoutSidebar />
    <div class="flex flex-col flex-grow max-h-screen">
      <nav class="flex items-center gap-3 bg-primary-50 px-3 h-[4rem] shadow-sm border-b">
        <h1>Dashboard</h1>
        <InputGroup class="w-[18rem] ml-auto">
          <InputGroupAddon>
            <i class="pi pi-search"></i>
          </InputGroupAddon>
          <InputText placeholder="Pesquisar por.." />
        </InputGroup>

        <Button class="alert" icon="pi pi-bell" text plain></Button>
        <div class="flex gap-2">
          <img class="min-w-[3rem] rounded-lg" :src="`https://mineskin.eu/helm/${user?.username}/64.svg`" />
          <div>
            <p>Brun0XP</p>
            <small>Configurações da conta</small>
          </div>
        </div>
      </nav>
      <div class="p-3 overflow-auto">
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
