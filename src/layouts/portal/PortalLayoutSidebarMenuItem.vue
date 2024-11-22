<template>
  <li v-if="item.children" class="cursor-pointer">
    <div
      class="hover:bg-primary-100 px-3 py-2 rounded-lg flex items-center gap-2"
      v-ripple
      v-styleclass="{
        selector: '@next',
        enterFromClass: 'hidden',
        enterActiveClass: 'animate-slidedown',
        leaveToClass: 'hidden',
        leaveActiveClass: 'animate-slideup'
      }"
    >
      <i :class="item.icon"></i>
      <span>
        {{ item.name }}
      </span>
      <i class="pi pi-chevron-down ml-auto"></i>
    </div>
    <ul class="list-none border-l border-gray-400 ml-3 pl-3 overflow-hidden hidden">
      <template v-for="child in item.children">
        <PortalLayoutSidebarMenuItem v-if="child.active" :item="child" />
      </template>
    </ul>
  </li>

  <li v-else-if="item.path" class="cursor-pointer">
    <RouterLink :to="item.path" class="hover:bg-primary-100 px-3 py-2 rounded-lg flex items-center gap-2" v-ripple>
      <i :class="item.icon"></i>
      <span>
        {{ item.name }}
      </span>
    </RouterLink>
  </li>
</template>

<script lang="ts" setup>
interface MenuItem {
  name: string
  path?: string
  icon: string
  roles: string[]
  active: boolean
  children?: MenuItem[]
}
interface Props {
  item: MenuItem
}
defineProps<Props>()
</script>
