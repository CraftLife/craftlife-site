<template>
  <nav class="p-3">
    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex align-items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
            item.shortcut
          }}</span>
          <i
            v-if="hasSubmenu"
            :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"
          ></i>
        </a>
      </template>
      <template #end>
        <SplitButton v-if="user" :label="user.username" :model="items" />
        <RouterLink to="/login">
          <Button icon="pi pi-sign-in" label="Entrar"></Button>
        </RouterLink>
      </template>
    </Menubar>
    <!-- <div class="navigation-content mx-auto flex align-items-center">
      <ul class="list-none flex gap-3 m-0 p-0">
        <li>Teste</li>
        <li>Teste</li>
        <li>Teste</li>
      </ul>
      <div class="ml-auto">
        <SplitButton v-if="user" pt:root:class="bg-pink-300 border-pink-300" :label="user.username" :model="items" />
        <RouterLink v-else to="/login">
          <Button class="bg-pink-300 border-pink-300" icon="pi pi-sign-in" label="Entrar"></Button>
        </RouterLink>
      </div>
    </div> -->
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuth } from '@/composables'

const { user } = useAuth()

const links = [
  { name: 'Início', to: '/' },
  { name: 'Loja', to: '/loja' },
  { name: 'Regras', to: 'https://williamestrela.gitbook.io/craftlife-ajuda/regras' },
  { name: 'Discord', to: 'https://discord.gg/txW4A47Dx6' },
  { name: 'Contato', to: '/contact' },
  { name: 'Punições', to: '/punishments', roles: ['STAFF', 'ADMIN'] }
]

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Features',
    icon: 'pi pi-star'
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Core',
        icon: 'pi pi-bolt',
        shortcut: '⌘+S'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
        shortcut: '⌘+B'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil',
        shortcut: '⌘+U'
      },
      {
        separator: true
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette',
            badge: 2
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette',
            badge: 3
          }
        ]
      }
    ]
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    badge: 3
  }
])

// const items = [
//   {
//     label: 'Logout',
//     icon: 'pi pi-sign-out',
//     command: () => {}
//   }
// ]
</script>

<style lang="scss" scoped>
.navigation-content {
  max-width: 1120px;
}
</style>
