<template>
  <Dialog
    v-model:visible="fastLoginData.modalVisible"
    :style="{ width: '22rem', margin: '1rem' }"
    modal
    :pt="{
      root: 'border-none',
      mask: {
        style: 'backdrop-filter: blur(2px)'
      }
    }"
  >
    <template #container="{ closeCallback }">
      <div
        class="flex flex-col p-3 gap-2"
        style="
          border-radius: 12px;
          background-image: radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700));
        "
      >
        <img
          class="w-[5rem] h-[5rem] mx-auto rounded -mt-12 shadow-md"
          :src="`https://mineskin.eu/helm/${fastLoginData.response?.username}/64.svg`"
          alt=""
        />
        <h1 class="text-primary-50 text-center font-semibold text-2xl m-0">Login automático</h1>
        <p class="text-primary-50 text-center">
          Deseja continuar como <b>{{ fastLoginData.response?.username }}</b
          >?
        </p>
        <div class="flex align-items-center gap-3">
          <Button
            label="Cancelar"
            icon="pi pi-times"
            @click="closeCallback"
            text
            class="w-full text-primary-50 border-white-alpha-30 hover:bg-white-alpha-10 hover:text-primary-500"
          ></Button>
          <Button
            label="Continuar"
            icon="pi pi-sign-in"
            @click="saveFastLoginToken"
            text
            class="w-full text-primary-50 border-white-alpha-30 hover:bg-white-alpha-10 hover:text-primary-500"
          ></Button>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAuth } from '@/composables'

const { fastLogin, saveFastLoginToken, fastLoginData } = useAuth()

onMounted(() => {
  fastLogin()
})
</script>
