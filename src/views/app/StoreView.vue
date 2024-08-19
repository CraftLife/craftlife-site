<template>
  <div class="flex gap-2 overflow-x-auto">
    <!-- <pre>{{ categories }}</pre> -->
    <Card class="w-full cursor-pointer" @click="selectedCategorie = categorie" v-for="categorie in categories">
      <template #content>
        <div class="flex items-center gap-2">
          <i class="text-xl" :class="categorie.icon"></i>
          <span class="text-nowrap">{{ categorie.name }}</span>
        </div>
      </template>
    </Card>
  </div>

  <Card class="mt-2" v-if="selectedCategorie">
    <template #header>
      <div class="flex items-center gap-3 border-dashed border-b-2 surface-border p-4">
        <i class="text-6xl" :class="selectedCategorie.icon" :style="{ color: selectedCategorie.iconColor }"></i>
        <div>
          <h1 class="m-0 text-2xl">{{ selectedCategorie.title }}</h1>
          <p class="m-0 text-surface-600">
            {{ selectedCategorie.description }}
          </p>
        </div>
      </div>
    </template>
    <template #content>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <Card pt:body:class="p-3" v-for="product in selectedCategorie.products">
          <template #content>
            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-2">
                <i class="text-5xl" :class="product.icon" :style="{ color: product.iconColor }"></i>
                <span class="text-lg">{{ product.name }}</span>
                <div class="flex items-start ml-auto text-3xl">
                  <span class="text-sm mr-1 mt-1">R$</span>
                  {{ product.price - product.price * product.discount }}
                </div>
              </div>
              <div class="border-dashed border-b surface-border"></div>
              <ul class="flex flex-col gap-2 list-none pl-0">
                <li
                  v-for="feature in product.features"
                  class="flex items-center gap-1 text-sm"
                  :class="{ 'line-through': !feature.has }"
                >
                  <i v-if="feature.has" class="pi pi-check-circle text-green-500"></i>
                  <i v-else class="pi pi-times-circle"></i>
                  {{ feature.name }}
                </li>
              </ul>
              <div class="border-dashed border-b surface-border"></div>
              <RouterLink :to="`/checkout/${product.uuid}`">
                <Button class="w-full" label="Adquirir agora!"></Button>
              </RouterLink>
            </div>
          </template>
        </Card>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useFetch } from '@/composables'

const categories = ref()
const selectedCategorie = ref()

onMounted(() => {
  getCategories()
})

const getCategories = () => {
  useFetch('category')
    .get()
    .json()
    .then(({ data }) => {
      categories.value = data.value
      selectedCategorie.value = data.value[0]
    })
}
</script>
