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

  <div class="grid mt-2">
    <div class="col-6">
      <Card class="h-full">
        <template #title>Meta de doação</template>
        <template #content>
          <ProgressBar class="mt-4" :value="(120 / 300) * 100">{{ (120 / 300) * 100 }}%</ProgressBar>
          <div class="mt-4">
            Foram doados <span class="text-green-500">R$ 120,00</span> até o momento, a meta é
            <span class="text-green-500">R$ 300,00</span>
          </div>
        </template>
      </Card>
    </div>
    <div class="col-6">
      <Card class="h-full">
        <template #title>Últimas doações</template>
        <template #content>
          <div class="flex flex-column gap-2">
            <div class="flex align-items-center">
              <img class="w-3rem h-3rem border-round" src="https://mineskin.eu/helm/Brun0XP/64.svg" alt="" />
              <div class="ml-3">
                <p class="m-0">Brun0XP</p>
                <p class="m-0">VIP NETHERITE</p>
              </div>
              <div class="ml-auto text-xl text-green-500">R$ 35,00</div>
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

<style lang="scss" scoped>
.banner {
  background: url('@/assets/imgs/campanha-rs.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
