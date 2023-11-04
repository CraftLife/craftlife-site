<template>
  <div class="flex items-center space-x-4 p-8 border-dashed border-b-2 shadow-lg">
    <i v-if="icon" class="text-6xl text-cyan-400" :class="[icon, 'text-' + iconColor, 'rotate-' + iconRotateAngle]" />
    <div class="text-gray-600">
      <h1 class="text-4xl font-bold" v-text="title" />
      <h2 v-text="description" />
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
  }
})
</script>
