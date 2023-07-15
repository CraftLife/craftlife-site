<template>
  <div class="flex flex-col justify-center items-center min-h-full min-h-screen">
    <form class="flex flex-col bg-white p-4 rounded-lg shadow-l w-64" @submit.prevent="customSignIn(form)">
      <img
        class="w-16 h-16 self-center -mt-12 rounded-md shadow-sm"
        :src="`https://mineskin.eu/helm/${form.username}/64.svg`"
      />
      <h1 class="text-center my-4 text-xl px-4">Seja bem-vindo de volta!</h1>

      <div class="mb-2">
        <label for="username" class="text-sm">Nome no jogo</label>
        <input
          id="username"
          v-model="form.username"
          class="bg-pink-50 px-4 py-2 rounded-md focus:outline-none focus:bg-pink-100"
        />
        <p v-if="error?.status === 404" class="text-xs text-red-500">Usuário não encontrado!</p>
      </div>

      <div class="mb-6">
        <label for="password" class="text-sm">Senha</label>
        <input
          id="username"
          v-model="form.password"
          class="bg-pink-50 px-4 py-2 rounded-md focus:outline-none focus:bg-pink-100"
          type="password"
        />
        <p v-if="error?.status === 401" class="text-xs text-red-500">Senha incorreta!</p>
      </div>

      <button
        class="flex items-center space-x-2 bg-pink-400 hover:bg-pink-500 px-6 py-2 self-end rounded-xl text-white transition-all"
        type="submit"
        :disabled="pending"
      >
        <span>Entrar</span>
        <i v-if="pending" class="ph ph-circle-notch animate-spin"></i>
        <i v-else class="ph ph-sign-in" />
      </button>
    </form>
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

const { signIn } = useAuth()

const pending = ref(false)
const error = ref<null | { status: number }>(null)
const customSignIn = ({ username, password }: { username: string; password: string }) => {
  pending.value = true
  signIn({ username, password }, { callbackUrl: '/' })
    .catch((e) => {
      error.value = e.data
    })
    .finally(() => (pending.value = false))
}
</script>
