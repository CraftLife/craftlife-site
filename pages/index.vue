<template>
  <div class="space-y-2">
    <RouterLink
      to="/loja"
      class="banner flex flex-col text-gray-50 items-center justify-center space-y-4 border-4 border-gray-50 bg-gray-50 rounded-xl shadow-xl h-56 sm:h-80"
    >
      <h2 class="font-semibold text-4xl bg-black p-2 bg-opacity-50 rounded">SEJA VIP!</h2>
      <p class="text-xl bg-black p-2 bg-opacity-50 rounded">E receba diversas vantagens!</p>
    </RouterLink>

    <div class="bg-gray-50 rounded-xl shadow-xl">
      <SectionHeader
        title="Não sabe como jogar?"
        description="Assista o vídeo ao abaixo para aprender como jogar. Além do vídeo, você pode contar com nossos staffs para lhe ajudar sempre que necessario!"
        icon="ph-bold ph-hand-pointing"
        icon-color="cyan-400"
        :icon-rotate-angle="90"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 p-2">
        <div class="hidden flex-col items-center justify-center md:flex">
          <a
            href="https://www.craftlife.com.br/tlauncher-installer.exe"
            class="flex flex-col items-center bg-gray-100 text-gray-600 p-4 rounded-xl shadow-xl transition-all duration-150 hover:scale-110 hover:bg-gray-200"
          >
            <i class="ph ph-download text-4xl mb-3"></i>
            <h2 class="mb-2">BAIXE AQUI</h2>
            <p class="w-44 text-sm text-center">
              Comece a jogar minecraft em nossos servidores agora mesmo baixando o TLauncher
            </p>
          </a>
        </div>
        <iframe
          class="w-full"
          height="315"
          src="https://www.youtube.com/embed/K_eGUZHPhEA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background: url('@/assets/images/car-banner.jpeg');
  background-position: center;
}
</style>
