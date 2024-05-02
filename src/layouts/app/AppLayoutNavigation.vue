<template>
  <nav class="p-3">
    <Menubar pt:root:class="navigation-bar" :model="computedLinks">
      <template #item="{ item, props }">
        <RouterLink :to="item.to" v-ripple class="flex align-items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </RouterLink>
      </template>
      <template #end>
        <SplitButton v-if="user" :label="user.username" :model="profileActions" />
        <RouterLink v-else to="/login">
          <Button icon="pi pi-sign-in" label="Entrar"></Button>
        </RouterLink>
      </template>
    </Menubar>
  </nav>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAuth } from '@/composables'

const { user, logout } = useAuth()

// const links = [
//   { name: 'Início', to: '/' },
//   { name: 'Loja', to: '/loja' },
//   { name: 'Regras', to: 'https://williamestrela.gitbook.io/craftlife-ajuda/regras' },
//   { name: 'Discord', to: 'https://discord.gg/txW4A47Dx6' },
//   { name: 'Contato', to: '/contact' },
//   { name: 'Punições', to: '/punishments', roles: ['STAFF', 'ADMIN'] }
// ]

const links = ref([
  {
    label: 'INÍCIO',
    icon: 'pi pi-home',
    to: '/'
  },
  {
    label: 'LOJA',
    icon: 'pi pi-star',
    to: '/store'
  },
  {
    label: 'REGRAS',
    icon: 'pi pi-search',
    to: '/rules'
  },
  {
    label: 'DISCORD',
    icon: 'pi pi-discord',
    to: '/discord'
  },
  {
    label: 'CONTATO',
    icon: 'pi pi-envelope',
    to: '/contact'
  },
  {
    label: 'PORTAL ',
    icon: 'pi pi-gauge',
    roles: ['ADMIN', 'STAFF'],
    to: '/portal'
  }
])

const computedLinks = computed(() => {
  return links.value.filter((link) => {
    if (!link.roles) return true
    return user.value?.roles.some((role) => link.roles?.includes(role))
  })
})

const profileActions = ref([
  {
    label: 'Sair',
    icon: 'pi pi-sign-out',
    command: () => {
      logout()
    }
  }
])
</script>

<style lang="scss" scoped>
.navigation-bar {
  max-width: 1120px;
  margin: 0 auto;
}
</style>
