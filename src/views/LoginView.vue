<template>
  <form class="relative flex justify-center items-center min-h-screen p-3" @submit.prevent="onSubmit">
    <RouterLink class="absolute top-0 left-0 ml-2 mt-2" to="/">
      <Button icon="pi pi-chevron-left" plain text></Button>
    </RouterLink>
    <Card class="w-[22rem]">
      <template #header>
        <div class="flex justify-center -mt-10">
          <img class="w-[5rem] border-round-lg" :src="form.headUrl" />
        </div>
        <!-- <img
          class="w-16 h-16 self-center -mt-12 rounded-md shadow-sm"
          :src="`https://mineskin.eu/helm/${form.username}/64.svg`"
        /> -->
      </template>
      <template #title>
        <h1 class="text-2xl font-semibold">Seja bem-vindo de volta!</h1>
      </template>
      <template #content>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
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
          <div class="flex flex-col gap-2">
            <label for="username">Senha</label>
            <IconField iconPosition="left">
              <InputIcon class="pi pi-lock"> </InputIcon>
              <InputText v-model="form.password" class="w-full" type="password" />
            </IconField>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end mt-4">
          <Button label="Entrar" icon="pi pi-sign-in" type="submit"></Button>
        </div>
      </template>
    </Card>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuth } from '@/composables'

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
