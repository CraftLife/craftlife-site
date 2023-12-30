<template>
  <div class="bg-gray-50 p-4 rounded-xl shadow-xl flex items-center space-x-2 cursor-pointer">
    <i class="text-2xl" :class="icon"></i>
    <span v-text="name"></span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String
  },
  icon: {
    type: String
  }
})
</script>
