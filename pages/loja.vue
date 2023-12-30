<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
    <SkeletonCategoryCard v-if="categoriesPending" />
    <StoreCategoryCard
      v-for="category in categories"
      :name="category.name"
      :icon="category.icon"
      @click="selectedCategory = category"
    />
  </div>
  <div v-if="selectedCategory" class="bg-gray-50 rounded-xl shadow-xl">
    <SectionHeader
      :title="selectedCategory.title"
      :description="selectedCategory.description"
      :icon="selectedCategory.icon"
      :icon-color="selectedCategory.iconColor"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      <StoreProductCard
        v-for="product in selectedCategory.products"
        :product="product"
        @select="$router.push(`/checkout/${product.uuid}`)"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const selectedCategory = ref()

const { pending: categoriesPending, data: categories }: any = useApiFetch('/category', {
  onResponse({ response }) {
    selectedCategory.value = response._data[0]
  }
})
</script>
