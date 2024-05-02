<template>
  <DefineStatusCard v-slot="{ title, description, icon, side }">
    <div class="flex align-items-center text-white bg-green-400 px-3 py-2 mx-3 border-round-lg shadow-2">
      <i v-if="side !== 'right'" :class="icon" class="mr-3 text-3xl"></i>
      <div>
        <h2 class="mt-0 mb-2 text-lg font-semibold" v-text="title"></h2>
        <span v-text="description"></span>
      </div>
      <i v-if="side === 'right'" :class="icon" class="ml-3 text-3xl"></i>
    </div>
  </DefineStatusCard>

  <header class="flex flex-column">
    <img class="max-w-15rem flex align-self-center" src="@/assets/imgs/hero.png" alt="" />
    <div class="hidden sm:flex justify-content-evenly mb-4" v-if="isFinished">
      <ReuseStatusCard
        title="jogar.craftlife.com.br"
        :description="`${serverStatus?.server?.players?.online} Jogadores online!`"
        icon="pi pi-crown"
      />
      <ReuseStatusCard
        title="Discord CraftLife"
        :description="`${serverStatus?.discord?.presence_count} Membros  online!`"
        icon="pi pi-discord"
        side="right"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useFetch } from '@/composables'
import { createReusableTemplate } from '@vueuse/core'

const { isFinished, data: serverStatus }: any = useFetch('/server/status').json()

const [DefineStatusCard, ReuseStatusCard] = createReusableTemplate<{
  title: string
  description: string
  icon: string
  side?: string
}>()
</script>

<style lang="scss" scoped>
header {
  background-image: url('@/assets/imgs/banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
