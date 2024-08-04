<template>
  <DefineStatusCard v-slot="{ title, description, icon, side }">
    <div class="flex items-center text-white bg-green-400 px-3 py-2 mx-3 rounded-xl bg-opacity-80 shadow-xl">
      <i v-if="side !== 'right'" :class="icon" class="mr-3 text-3xl"></i>
      <div>
        <h2 class="my-0 text-lg font-semibold" v-text="title"></h2>
        <span v-text="description"></span>
      </div>
      <i v-if="side === 'right'" :class="icon" class="ml-3 text-3xl"></i>
    </div>
  </DefineStatusCard>

  <header class="flex flex-col">
    <img class="max-w-[15rem] flex self-center py-6" src="@/assets/imgs/hero.png" alt="" />
    <div class="hidden sm:flex justify-evenly mb-4" v-if="isFinished">
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
  background-image: url('@/assets/imgs/banner-tricky-trials.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
