<template>
  <header class="flex flex-col items-center banner p-4">
    <img src="@/assets/images/hero.png" alt="" width="300px" />
    <div class="flex w-full justify-between items-center max-w-4xl">
      <div class="flex items-center text-white bg-pink-400 bg-opacity-50 rounded-xl px-4 py-2 space-x-4">
        <i class="ph ph-crown text-3xl"></i>
        <div>
          <h2 class="font-bold text-xl">jogar.craftlife.com.br</h2>
          <span class="text-gray-100">123 Jogadores online!</span>
        </div>
      </div>
      <div class="flex items-center text-white bg-pink-400 bg-opacity-50 rounded-xl px-4 py-2 space-x-4">
        <div>
          <h2 class="font-bold text-xl">Discord CraftLife</h2>
          <span class="text-gray-100">250 Membros online!</span>
        </div>
        <i class="ph ph-discord-logo text-3xl"></i>
      </div>
    </div>
  </header>
  <nav class="bg-white py-4">
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
      <div v-if="session" class="flex space-x-4">
        <div class="flex items-center">
          <img class="w-10 rounded-l-md" :src="`https://mineskin.eu/helm/${session.username}/64.svg`" />
          <button class="bg-pink-400 text-white px-4 py-2 rounded-r-md">
            {{ session.username }}
          </button>
        </div>
        <button class="px-2" @click="logout()">
          <i class="ph ph-sign-out" />
        </button>
      </div>
      <div v-else class="space-x-4">
        <!-- <NuxtLink class="flex items-center bg-pink-400 text-white rounded-lg space-x-2 px-4 py-2" to="/login">
          <span>Entrar</span>
          <i class="ph ph-sign-in" />
        </NuxtLink> -->
        <!-- <a href="/login">Registrar</a> -->
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const { signOut, getSession } = useAuth()
let session = await getSession()

async function logout() {
  signOut({ callbackUrl: '/' })
  session = await getSession()
}

const links = [
  { name: 'Início', to: '/' },
  { name: 'Loja', to: '/store' },
  { name: 'Regras', to: 'https://williamestrela.gitbook.io/craftlife-ajuda/regras' },
  { name: 'Discord', to: 'https://discord.gg/txW4A47Dx6' },
  { name: 'Contato', to: '/contact' },
  { name: 'Punições', to: '/punishments', roles: ['STAFF', 'ADMIN'] }
]

const computedLinks = computed(() => {
  return links.filter((link) => {
    if (!link.roles) return true
    return link.roles.some((role) => session?.roles.includes(role))
  })
})
</script>

<style scoped>
.banner {
  background-image: url('/assets/images/banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
