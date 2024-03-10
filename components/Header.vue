<template>
  <header class="banner p-4">
    <div class="grid sm:grid-cols-2 max-w-4xl mx-auto">
      <div class="sm:col-span-2 flex justify-center">
        <img src="@/assets/images/hero.png" alt="" width="300" />
      </div>
      <div class="hidden sm:flex">
        <div class="flex items-center text-white bg-green-400 bg-opacity-70 rounded-xl px-4 py-2 space-x-4">
          <i class="ph ph-crown text-3xl"></i>
          <div>
            <h2 class="font-bold text-xl">jogar.craftlife.com.br</h2>
            <div v-if="pending" class="animate-pulse flex-1 my-1 h-4 bg-slate-200 rounded"></div>
            <span v-else-if="serverStatus?.server" class="text-gray-100"
              >{{ serverStatus?.server.players?.online }} Jogadores online!</span
            >
          </div>
        </div>
      </div>
      <div class="hidden sm:flex sm:justify-end">
        <div class="flex items-center text-white bg-green-400 bg-opacity-70 rounded-xl px-4 py-2 space-x-4">
          <div>
            <h2 class="font-bold text-xl">Discord CraftLife</h2>
            <div v-if="pending" class="animate-pulse flex-1 my-1 h-4 bg-slate-200 rounded"></div>
            <span v-else-if="serverStatus?.discord" class="text-gray-100"
              >{{ serverStatus?.discord.presence_count }} Membros online!</span
            >
          </div>
          <i class="ph ph-discord-logo text-3xl"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { pending, data: serverStatus }: any = useApiFetch('/server/status')
</script>

<style scoped>
.banner {
  background-image: url('/assets/images/banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
