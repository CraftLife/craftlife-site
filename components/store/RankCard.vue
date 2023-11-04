<template>
  <div
    class="flex flex-col justify-between max-w-xs bg-gray-100 shadow-xl rounded-2xl p-4 border border-gray-200 mx-auto"
  >
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <div class="flex space-x-2 items-center">
          <slot name="image">
            <i class="ph ph-sketch-logo text-5xl -rotate-12" :class="[iconClass]" />
          </slot>

          <div>
            <h2 v-text="title" />
            <small
              v-if="label"
              class="text-white text-xs px-2 py-1 rounded-full whitespace-nowrap"
              :class="[labelClass]"
              v-text="label"
            />
          </div>
        </div>
        <p class="text-4xl whitespace-nowrap flex align-start"><span class="text-sm mt-1 mr-1">R$</span> {{ price }}</p>
      </div>
      <div class="border-dashed border-b-2" />
      <ul class="text-sm">
        <li v-for="feature in features" class="flex items-center space-x-2">
          <i v-if="feature.has" class="ph-fill ph-check-circle text-xl text-emerald-400"></i>
          <i v-else class="ph ph-x-circle text-xl text-gray-500"></i>
          <p v-text="feature.description" :class="{ ['text-gray-500 line-through']: !feature.has }" />
        </li>
      </ul>
    </div>
    <div class="space-y-4 mt-4">
      <div class="border-dashed border-b-2" />
      <button
        class="bg-pink-300 hover:bg-pink-400 duration-150 text-white px-4 py-2 w-full rounded-xl"
        @click="$emit('select')"
      >
        Escolher este vip
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Feature {
  description: String
  details: String
  has: Boolean
}
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  iconClass: {
    type: String,
    default: 'text-gray-300'
  },
  label: {
    type: String
  },
  labelClass: {
    type: String,
    default: 'bg-emerald-400'
  },
  features: {
    type: Array<Feature>
  }
})
</script>
<style></style>
