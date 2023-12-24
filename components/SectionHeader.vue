<template>
  <div class="flex items-center space-x-4 p-8 border-dashed border-b-2 shadow-lg">
    <i v-if="icon" class="text-6xl text-cyan-400" :class="[icon, 'text-' + iconColor, 'rotate-' + iconRotateAngle]" />
    <div class="text-gray-600">
      <h1 class="text-4xl font-bold" v-text="title" />
      <h2 v-text="description" />
    </div>
    <div v-if="discount" class="relative w-32 h-32">
      <i class="top-0 left-0 ph-fill ph-seal text-9xl text-red-700"></i>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <span class="text-3xl">{{ discount }}%</span> <br />
        OFF
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String
  },
  description: {
    type: String
  },
  icon: {
    type: String
  },
  iconColor: {
    type: String,
    default: 'gray-600'
  },
  iconRotateAngle: {
    type: Number,
    default: 0
  },
  discount: {
    type: Number,
    default: 0
  }
})
</script>
