<template>
  <nav class="bg-white py-4 hidden md:block">
    <div class="flex justify-between mx-auto max-w-6xl px-4">
      <ul class="flex items-center space-x-4">
        <li v-for="link in computedLinks">
          <NuxtLink
            class="text-pink-400 uppercase rounded-md px-3 py-1"
            :class="{
              'bg-pink-100 shadow': $route.path === link.to
            }"
            :to="link.to"
            >{{ link.name }}</NuxtLink
          >
        </li>
      </ul>
      <div v-if="data" class="flex space-x-4">
        <div class="flex items-center">
          <img class="w-10 rounded-l-md" :src="`https://mineskin.eu/helm/${data.username}/64.svg`" />
          <button class="bg-pink-400 text-white px-4 py-2 rounded-r-md">
            {{ data.username }}
          </button>
        </div>
        <button class="px-2" @click="logout()">
          <i class="ph ph-sign-out" />
        </button>
      </div>
      <div v-else class="space-x-4">
        <NuxtLink class="flex items-center bg-pink-400 text-white rounded-lg space-x-2 px-4 py-2" to="/login">
          <span>Entrar</span>
          <i class="ph ph-sign-in" />
        </NuxtLink>
      </div>
    </div>
  </nav>
  <nav class="flex justify-between bg-white p-4 md:hidden">
    <button @click="toggle"><i class="ph ph-list" /></button>
    <OverlayPanel ref="menu">
      <ul class="space-y-2">
        <li v-for="link in computedLinks">
          <NuxtLink
            class="text-pink-400 uppercase rounded-md px-2 py-1"
            :class="{
              'bg-pink-100 shadow': $route.path === link.to
            }"
            :to="link.to"
            >{{ link.name }}</NuxtLink
          >
        </li>
      </ul>
    </OverlayPanel>
    <div v-if="data" class="flex space-x-4">
      <div class="flex items-center">
        <img class="w-10 rounded-l-md" :src="`https://mineskin.eu/helm/${data.username}/64.svg`" />
        <button class="bg-pink-400 text-white px-4 py-2 rounded-r-md">
          {{ data.username }}
        </button>
      </div>
      <button class="px-2" @click="logout()">
        <i class="ph ph-sign-out" />
      </button>
    </div>
    <div v-else class="space-x-4">
      <NuxtLink class="flex items-center bg-pink-400 text-white rounded-lg space-x-2 px-4 py-2" to="/login">
        <span>Entrar</span>
        <i class="ph ph-sign-in" />
      </NuxtLink>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const { signOut, data } = useAuth()

async function logout() {
  signOut({ callbackUrl: '/' })
}

const links = [
  { name: 'Início', to: '/' },
  { name: 'Loja', to: '/loja' },
  { name: 'Regras', to: 'https://williamestrela.gitbook.io/craftlife-ajuda/regras' },
  { name: 'Discord', to: 'https://discord.gg/txW4A47Dx6' },
  { name: 'Contato', to: '/contact' },
  { name: 'Punições', to: '/punishments', roles: ['STAFF', 'ADMIN'] }
]

const computedLinks = computed(() => {
  return links.filter((link) => {
    if (!link.roles) return true
    return link.roles.some((role) => data.value?.roles.includes(role))
  })
})

const menu = ref()
const toggle = (event: any) => {
  menu.value.toggle(event)
}
</script>
