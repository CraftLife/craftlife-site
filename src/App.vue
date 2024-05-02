<template>
  <Toast />
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuth } from '@/composables'
import Toast from 'primevue/toast'

const { fetchUser } = useAuth()
onMounted(() => {
  fetchUser()
})
</script>
