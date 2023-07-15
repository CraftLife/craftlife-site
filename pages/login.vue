<template>
  <div class="flex flex-col justify-center items-center min-h-full min-h-screen">
    <form class="flex flex-col bg-white p-4 rounded-lg shadow-l w-64" @submit.prevent="signIn(form)">
      <img
        class="w-16 self-center -mt-12 rounded-md shadow-sm"
        :src="`https://mineskin.eu/helm/${form.username}/64.svg`"
      />
      <h1 class="text-center my-4 text-xl px-4">Seja bem-vindo de volta!</h1>
      <label for="username" class="text-sm">Nome no jogo</label>
      <input
        id="username"
        v-model="form.username"
        class="bg-pink-50 px-4 py-2 rounded-md focus:outline-none focus:bg-pink-100 mb-2"
      />
      <label for="password" class="text-sm">Senha</label>

      <input
        id="username"
        v-model="form.password"
        class="bg-pink-50 px-4 py-2 rounded-md focus:outline-none focus:bg-pink-100 mb-6"
        type="password"
      />
      <button
        class="flex items-center space-x-2 bg-pink-300 hover:bg-pink-400 px-6 py-2 self-end rounded-xl text-white"
        type="submit"
      >
        <span>Entrar</span>
        <i class="ph ph-sign-in" />
      </button>
    </form>
    <pre>Status: {{ status }}</pre>
    <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
    <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
    <pre>JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/'
  },
  layout: 'auth'
})

const form = reactive({
  username: '',
  password: ''
})

const { signIn, token, data, status, lastRefreshedAt } = useAuth()
</script>
