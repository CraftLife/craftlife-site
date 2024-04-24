<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuth } from '@/composables'

const { fetchUser } = useAuth()
onMounted(() => {
  fetchUser()
})
</script>
