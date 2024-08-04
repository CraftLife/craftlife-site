<template>
  <Card style="overflow: hidden" pt:body:class="p-1">
    <template #content>
      <RouterLink
        to="/store"
        class="banner flex flex-col text-gray-50 items-center justify-center gap-4 h-[14rem] no-underline rounded-xl"
      >
        <h2 class="m-0 text-4xl bg-black bg-opacity-60 rounded-md p-2">SEJA VIP!</h2>
        <p class="m-0 text-xl bg-black bg-opacity-60 rounded-md p-2">E receba diversas vantagens</p>
      </RouterLink>
    </template>
  </Card>

  <Card class="mt-3">
    <template #header>
      <div class="flex items-center gap-3 border-dashed border-b-2 p-4">
        <i class="pi pi-question-circle text-6xl text-primary-500"></i>
        <div>
          <h1 class="m-0 text-2xl">Não sabe como jogar?</h1>
          <p class="m-0 text-surface-600">
            Assista ao vídeo a abaixo para aprender como jogar. Além do vídeo, você pode contar com nossos staffs para
            lhe ajudar sempre que necessario!
          </p>
        </div>
      </div>
    </template>
    <template #content>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="hidden md:flex items-center justify-center">
          <a
            href="https://www.craftlife.com.br/TLauncher-Installer-1.3.5.exe"
            class="flex flex-col items-center bg-surface-50 text-surface-600 p-3 rounded-lg shadow-md transition-all hover:bg-gray-100"
          >
            <i class="pi pi-download text-4xl"></i>
            <h2 class="my-2">BAIXE AQUI</h2>
            <p class="w-[12rem] text-sm text-center">
              Comece a jogar minecraft em nossos servidores agora mesmo baixando o TLauncher
            </p>
          </a>
        </div>
        <div>
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
