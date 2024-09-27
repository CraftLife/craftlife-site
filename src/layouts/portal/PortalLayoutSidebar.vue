<template>
  <div class="min-h-full bg-primary-50 w-[16rem] border-r overflow-auto">
    <div class="p-3">
      <ul class="flex flex-col gap-1">
        <template v-for="item in menuSidebarItems">
          <PortalLayoutSidebarMenuItem v-if="item.active" :item="item" />
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import menuSidebarItems from '@/data/menu-sidebar.json'

import PortalLayoutSidebarMenuItem from '@/layouts/portal/PortalLayoutSidebarMenuItem.vue'
</script>
