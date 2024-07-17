<template>
  <Card style="overflow: hidden" pt:body:class="hidden">
    <template #header>
      <RouterLink
        to="/store"
        class="banner flex flex-column text-gray-50 align-items-center justify-content-center gap-4 h-14rem no-underline border-3 border-round-xl"
      >
        <h2 class="m-0 text-4xl bg-black-alpha-60 border-round-md p-2">SEJA VIP!</h2>
        <p class="m-0 text-xl bg-black-alpha-60 border-round-md p-2">E receba diversas vantagens</p>
      </RouterLink>
    </template>
  </Card>

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
  background: url('@/assets/imgs/car-banner.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
