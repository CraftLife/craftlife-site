<template>
  <Card style="overflow: hidden" pt:body:class="hidden">
    <template #header>
      <RouterLink
        to="/store"
        class="banner flex flex-column text-gray-50 align-items-center justify-content-center gap-4 h-14rem no-underline border-3 border-round-xl"
      >
        <h2 class="m-0 text-4xl bg-black-alpha-60 border-round-md p-2">DOE PARA NOSSOS COLEGAS DO RS!</h2>
        <p class="m-0 text-xl bg-black-alpha-60 border-round-md p-2 max-w-30rem">
          Cada produto comprado em nossa loja até 30/05, 100% do dinheiro arrecadado será doado para ajudar as famílias
          do rio grande do sul!
        </p>
      </RouterLink>
    </template>
  </Card>

  <div class="grid mt-2" v-if="isFinished">
    <div class="col-6">
      <Card class="h-full">
        <template #title>Meta de doação</template>
        <template #content>
          <ProgressBar :value="goalPercent > 100 ? 100 : goalPercent"> {{ goalPercent }}% </ProgressBar>
          <div class="mt-4" v-if="goalData.collected < goalData.goal">
            Até agora, arrecadamos <span class="text-green-500">{{ formatCurrency(goalData.collected) }}</span> para
            ajudar as famílias. Nossa meta é alcançar
            <span class="text-green-500">{{ formatCurrency(goalData.goal) }}</span
            >. Ao atingir a meta todos que ajudaram irão receber um presente especial no servidor.
          </div>
          <div class="mt-4" v-else>Meta atinginda! obrigado a todos os jogadores que ajudaram o rio grande do sul!</div>
        </template>
      </Card>
    </div>
    <div class="col-6">
      <Card class="h-full">
        <template #title>Últimas doações</template>
        <template #content>
          <div class="flex flex-column gap-2">
            <div v-for="donation in goalData.lastDonations" class="flex align-items-center">
              <img
                class="w-3rem h-3rem border-round"
                :src="`https://mineskin.eu/helm/${donation.username}/64.svg`"
                alt=""
              />
              <div class="ml-3">
                <p class="m-0 font-bold">{{ donation.username }}</p>
                <p class="m-0 text-sm">{{ donation.productName }}</p>
              </div>
              <div class="ml-auto text-xl text-green-500">{{ formatCurrency(donation.transactionAmount) }}</div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
  <Card class="mt-2">
    <template #header>
      <div class="flex align-items-center gap-3 border-dashed border-none border-bottom-2 surface-border p-4">
        <i class="pi pi-question-circle text-6xl text-cyan-500"></i>
        <div>
          <h1 class="m-0">Não sabe como jogar?</h1>
          <p class="m-0">
            Assista ao vídeo a abaixo para aprender como jogar. Além do vídeo, você pode contar com nossos staffs para
            lhe ajudar sempre que necessario!
          </p>
        </div>
      </div>
    </template>
    <template #content>
      <div class="grid">
        <div class="col-6 hidden md:flex align-items-center justify-content-center">
          <a
            href="https://www.craftlife.com.br/TLauncher-Installer-1.3.5.exe"
            class="flex flex-column align-items-center no-underline bg-gray-50 text-gray-600 p-3 border-round-lg shadow-2 transition-all transition-duration-150 hover:bg-gray-100"
          >
            <i class="pi pi-download text-4xl"></i>
            <h2 class="mb-0">BAIXE AQUI</h2>
            <p class="w-12rem text-sm text-center">
              Comece a jogar minecraft em nossos servidores agora mesmo baixando o TLauncher
            </p>
          </a>
        </div>
        <div class="col-12 md:col-6">
          <iframe
            class="w-full"
            height="315"
            src="https://www.youtube.com/embed/K_eGUZHPhEA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useFetch } from '@/composables'

const { isFinished, data: goalData }: any = useFetch('/server/goal/rs').json()

const goalPercent = computed(() => {
  if (goalData) return +((goalData.value.collected / goalData.value.goal) * 100).toFixed()
  return 0
})

const formatCurrency = (value: number) => {
  const options = {
    style: 'currency',
    currency: 'BRL'
  }

  return value.toLocaleString('pt-BR', options)
}
</script>

<style lang="scss" scoped>
.banner {
  background: url('@/assets/imgs/campanha-rs.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
