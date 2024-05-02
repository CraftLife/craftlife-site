<template>
  <div class="flex gap-2">
    <!-- <pre>{{ categories }}</pre> -->
    <Card class="w-full cursor-pointer" @click="selectedCategorie = categorie" v-for="categorie in categories">
      <template #content>
        <div class="flex align-items-center gap-2">
          <i class="text-xl" :class="categorie.icon"></i>
          <span>{{ categorie.name }}</span>
        </div>
      </template>
    </Card>
  </div>

  <Card class="mt-2" v-if="selectedCategorie">
    <template #header>
      <div class="flex align-items-center gap-3 border-dashed border-none border-bottom-2 surface-border p-4">
        <i class="text-6xl" :class="selectedCategorie.icon" :style="{ color: selectedCategorie.iconColor }"></i>
        <div>
          <h1 class="m-0">{{ selectedCategorie.title }}</h1>
          <p class="m-0">
            {{ selectedCategorie.description }}
          </p>
        </div>
      </div>
    </template>
    <template #content>
      <div class="flex flex-wrap gap-3">
        <Card
          class="flex-grow-1"
          pt:body:class="p-3"
          style="min-width: 300px"
          v-for="product in selectedCategorie.products"
        >
          <template #content>
            <div class="flex align-items-center gap-2 border-dashed border-none border-bottom-1 surface-border pb-2">
              <i class="text-5xl" :class="product.icon" :style="{ color: product.iconColor }"></i>
              <span class="text-lg">{{ product.name }}</span>
              <div class="flex align-items-start ml-auto text-3xl">
                <span class="text-sm mr-1 mt-1">R$</span>
                {{ product.price - product.price * product.discount }}
              </div>
            </div>

            <ul
              class="flex flex-column gap-2 list-none pl-0 border-dashed border-none border-bottom-1 surface-border pb-3"
            >
              <li
                v-for="feature in product.features"
                class="flex align-items-center gap-1 text-sm"
                :class="{ 'line-through': !feature.has }"
              >
                <i v-if="feature.has" class="pi pi-check-circle text-green-500"></i>
                <i v-else class="pi pi-times-circle"></i>
                {{ feature.name }}
              </li>
            </ul>

            <RouterLink :to="`/checkout/${product.uuid}`">
              <Button class="w-full" label="Adquirir agora!"></Button>
            </RouterLink>
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
