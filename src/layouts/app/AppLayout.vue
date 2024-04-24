<template>
  <div class="flex flex-column min-h-screen">
    <AppLayoutHeader />
    <AppLayoutNavigation />
    <div class="flex-grow-1">
      <RouterView />
    </div>
    <AppLayoutFooter />
  </div>
</template>

<script lang="ts" setup>
import AppLayoutHeader from '@/layouts/app/AppLayoutHeader.vue'
import AppLayoutNavigation from '@/layouts/app/AppLayoutNavigation.vue'
import AppLayoutFooter from '@/layouts/app/AppLayoutFooter.vue'
</script>
