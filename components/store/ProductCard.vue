<template>
  <div
    class="flex flex-col justify-between max-w-xs bg-gray-100 shadow-xl rounded-2xl p-4 border border-gray-200 mx-auto w-full"
  >
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <div class="flex space-x-2 items-center">
          <slot name="image">
            <i
              class="text-5xl -rotate-12"
              :class="product.icon"
              :style="{
                color: product.iconColor
              }"
            />
          </slot>

          <div>
            <h2 v-text="product.name" />
            <small
              v-if="product.label"
              class="text-white text-xs px-2 py-1 rounded-full whitespace-nowrap"
              :style="{
                backgroundColor: product.labelColor || '#34d399'
              }"
              v-text="product.label"
            />
          </div>
        </div>
        <div>
          <p v-if="product.discount" class="text-md text-right line-through">R$ {{ product.price }}</p>
          <p class="text-4xl whitespace-nowrap flex align-start">
            <span class="text-sm mt-1 mr-1">R$</span> {{ product.price - product.price * product.discount }}
          </p>
        </div>
      </div>
      <div class="border-dashed border-b-2" />
      <ul class="text-sm">
        <li v-for="feature in product.features" class="flex items-center space-x-2">
          <i v-if="feature.has" class="ph-fill ph-check-circle text-xl text-emerald-400"></i>
          <i v-else class="ph ph-x-circle text-xl text-gray-500"></i>
          <p v-text="feature.name" :class="{ ['text-gray-500 line-through']: !feature.has }" />
        </li>
      </ul>
    </div>
    <div class="space-y-4 mt-4">
      <div class="border-dashed border-b-2" />
      <button
        class="bg-pink-300 hover:bg-pink-400 duration-150 text-white px-4 py-2 w-full rounded-xl"
        @click="$emit('select')"
      >
        Adquirir agora!
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
<style></style>
