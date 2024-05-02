<template>
  <form class="relative flex justify-content-center align-items-center min-h-screen p-3" @submit.prevent="onSubmit">
    <RouterLink class="absolute top-0 left-0 ml-2 mt-2" to="/">
      <Button icon="pi pi-chevron-left" plain text></Button>
    </RouterLink>
    <Card class="w-22rem">
      <template #header>
        <div class="flex justify-content-center -mt-5">
          <img class="w-5rem border-round-lg" :src="form.headUrl" />
        </div>
        <!-- <img
          class="w-16 h-16 self-center -mt-12 rounded-md shadow-sm"
          :src="`https://mineskin.eu/helm/${form.username}/64.svg`"
        /> -->
      </template>
      <template #title>Seja bem-vindo de volta!</template>
      <template #content>
        <div class="flex flex-column gap-2">
          <div class="flex flex-column gap-2">
            <label for="username">Nome no jogo</label>
            <IconField iconPosition="left">
              <InputIcon class="pi pi-user"> </InputIcon>
              <InputText
                v-model="form.username"
                class="w-full"
                @focusout="form.headUrl = `https://mineskin.eu/helm/${form.username}/64.svg`"
              />
            </IconField>
          </div>
          <div class="flex flex-column gap-2">
            <label for="username">Senha</label>
            <IconField iconPosition="left">
              <InputIcon class="pi pi-lock"> </InputIcon>
              <InputText v-model="form.password" class="w-full" type="password" />
            </IconField>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-content-end">
          <Button class="bg-pink-300 border-pink-300" label="Entrar" icon="pi pi-sign-in" type="submit"></Button>
        </div>
      </template>
    </Card>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuth } from '@/composables'

import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const form = ref({
  headUrl: 'https://mineskin.eu/helm/null/64.svg',
  username: '',
  password: ''
})

const { login } = useAuth()

const onSubmit = () => {
  login(form.value)
}
</script>
