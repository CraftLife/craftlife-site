<template>
  <div class="flex flex-column min-h-screen">
    <AppLayoutHeader />
    <AppLayoutNavigation />
    <div class="px-3 pb-3 flex-grow-1">
      <div class="content">
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

<style lang="scss" scoped>
.content {
  max-width: 1120px;
  margin: 0 auto;
}
</style>
