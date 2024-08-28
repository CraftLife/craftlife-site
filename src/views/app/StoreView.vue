<template>
  <div class="flex gap-2 overflow-x-auto">
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
              <img
                class="rounded-xl max-w-[15rem] mx-auto shadow-inner"
                :src="product.image"
                style="border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; background-color: var(--p-primary-100)"
              />
              <div class="text-center">
                <h2 class="text-2xl font-bold text-primary-500">{{ product.name }}</h2>
                <p class="text-md">{{ product.description }}</p>
              </div>

              <div class="flex justify-center">
                <span class="text-sm mr-1 mt-1">R$</span>
                <span class="text-3xl">{{ formatCurrency(product.price) }}</span>
              </div>
              <div class="flex gap-3 items-center">
                <Button class="w-full" label="Adquirir agora!" outlined @click="selectProduct(product)"></Button>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </template>
  </Card>

  <Dialog
    v-model:visible="modalSummaryVisible"
    modal
    :header="selectedProduct?.name"
    class="mx-3"
    :style="{ width: '40rem' }"
  >
    <img :src="selectedProduct?.image" class="max-w-[10rem] mx-auto" />

    <Button label="Adicionar ao carrinho" outlined></Button>
  </Dialog>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useFetch, useFormatter } from '@/composables'

const categories = ref()
const selectedCategorie = ref()
const selectedProduct = ref()
const modalSummaryVisible = ref(false)

const { formatCurrency } = useFormatter()

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

const selectProduct = (product: any) => {
  selectedProduct.value = product
  modalSummaryVisible.value = true
}
</script>
