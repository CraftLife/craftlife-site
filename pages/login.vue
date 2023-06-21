<template>
  <div>
    Login page
    <input v-model="form.username" type="text" />
    <input v-model="form.password" type="password" />
    <button @click="signIn(form, { callbackUrl: '/' })">Login</button>
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
</script>
