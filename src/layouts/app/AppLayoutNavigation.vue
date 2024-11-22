<template>
  <nav>
    <Menubar pt:root:class="max-w-6xl mx-auto" :model="computedLinks">
      <template #end>
        <SplitButton v-if="user" :label="user.username" :model="profileActions" />
        <RouterLink v-else to="/login">
          <Button icon="pi pi-sign-in" label="Entrar" size="small"></Button>
        </RouterLink>
      </template>
    </Menubar>
  </nav>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useAuth } from '@/composables'
import { useRouter } from 'vue-router'
import axios from '@/plugins/axios'
import { MenuItem } from 'primevue/menuitem'

const { user, logout } = useAuth()
const router = useRouter()

const links = ref<MenuItem[]>([])

onMounted(async () => {
  const categories = await getCategories()

  links.value = [
    {
      label: 'INÍCIO',
      icon: 'pi pi-home',
      command: () => {
        router.push('/')
      }
    },
    {
      label: 'LOJA',
      icon: 'pi pi-star',
      items: convertCategoriesToMenuItems(categories)
    },
    {
      label: 'REGRAS',
      icon: 'pi pi-search',
      command: () => {
        router.push('/rules')
      }
    },
    {
      label: 'DISCORD',
      icon: 'pi pi-discord',
      command: () => {
        router.push('/discord')
      }
    },
    {
      label: 'CONTATO',
      icon: 'pi pi-envelope',
      command: () => {
        router.push('/contact')
      }
    },
    {
      label: 'PORTAL ',
      icon: 'pi pi-gauge',
      roles: ['DIRECTOR', 'ADMIN'],
      command: () => {
        router.push('/portal')
      }
    }
  ]
})

const getCategories = async () => {
  return (await axios.get('category')).data
}

const convertCategoriesToMenuItems = (categories: any) => {
  return categories.map((category: any) => ({
    label: category.name,
    icon: category.icon,
    items: category.childrenCategories ? convertCategoriesToMenuItems(category.childrenCategories) : null,
    command: category.childrenCategories
      ? null
      : () => {
          router.push(`/store?categoryId=${category.id}`)
        }
  }))
}

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
