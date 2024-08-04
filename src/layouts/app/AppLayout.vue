<template>
  <div class="flex flex-col gap-3 min-h-screen">
    <AppLayoutHeader />
    <AppLayoutNavigation class="px-3" />
    <div class="flex-grow px-3">
      <div class="max-w-6xl mx-auto">
        <RouterView />
      </div>
    </div>
    <AppLayoutFooter />
    <AppFastLogin />
  </div>
</template>

<script lang="ts" setup>
import AppLayoutHeader from '@/layouts/app/AppLayoutHeader.vue'
import AppLayoutNavigation from '@/layouts/app/AppLayoutNavigation.vue'
import AppLayoutFooter from '@/layouts/app/AppLayoutFooter.vue'
import AppFastLogin from '@/layouts/app/AppFastLogin.vue'
</script>
