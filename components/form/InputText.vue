<template>
  <div>
    <label class="text-sm text-gray-500" :for="id" v-text="label" />
    <div class="flex items-center space-x-2 border border-gray-300 bg-gray-100 rounded-lg shadow-sm px-2 py-1 mb-3">
      <i v-if="iconClass" :class="iconClass"></i>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :id="id"
        class="w-full focus:outline-none bg-gray-100"
        :placeholder="label"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  id: {
    type: String
  },
  modelValue: String,
  label: {
    type: String,
    required: true
  },
  iconClass: {
    type: String
  }
})

defineEmits(['update:modelValue'])
</script>
