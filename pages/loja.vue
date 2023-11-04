<template>
  <div class="bg-gray-50 rounded-xl shadow-xl">
    <SectionHeader
      title="SEJA VIP!"
      description="Confira todas as vantagens de ativar cada VIP em nossos servidores."
      icon="ph ph-sketch-logo"
      icon-color="cyan-400"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      <StoreRankCard
        v-for="vip in vips"
        :id="vip.id"
        :title="vip.name"
        :label="vip.label"
        :icon-class="vip.iconClass"
        :price="vip.price"
        :features="vip.features"
        @select="$router.push(`/checkout/${vip.id}`)"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import vips from '@/data/vips.json'
</script>
