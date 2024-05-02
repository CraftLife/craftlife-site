<template>
  <Card>
    <template #header>
      <div class="flex align-items-center gap-3 border-dashed border-none border-bottom-2 surface-border p-4">
        <i class="pi pi-headphones text-6xl text-cyan-500"></i>
        <div>
          <h1 class="m-0">CONTATO</h1>
          <p class="m-0">Confira como você pode entrar em contato com a gente!</p>
        </div>
      </div>
    </template>
    <template #content>
      <div class="flex flex-column gap-2 align-items-center">
        <a
          class="flex align-items-center text-gray-700 w-full max-w-26rem no-underline px-5 py-3 bg-gray-50 border-1 border-round-lg shadow-1 border-gray-300 hover:bg-gray-100 transition-all transition-duration-150"
          href="https://api.whatsapp.com/send?phone=5562992638525"
        >
          <div>
            <h3 class="m-0">Whatsapp</h3>
            <p class="m-0">+55 62 99263-8525</p>
          </div>
          <i class="ml-auto pi pi-whatsapp text-4xl"></i>
        </a>
        <a
          class="flex align-items-center text-gray-700 w-full max-w-26rem no-underline px-5 py-3 bg-gray-50 border-1 border-round-lg shadow-1 border-gray-300 hover:bg-gray-100 transition-all transition-duration-150"
          href="mailto:contato@craftlife.com.br"
        >
          <div>
            <h3 class="m-0">E-mail</h3>
            <p class="m-0">contato@craftlife.com.br</p>
          </div>
          <i class="ml-auto pi pi-envelope text-4xl"></i>
        </a>
        <a
          class="flex align-items-center text-gray-700 w-full max-w-26rem no-underline px-5 py-3 bg-gray-50 border-1 border-round-lg shadow-1 border-gray-300 hover:bg-gray-100 transition-all transition-duration-150"
          href="https://ajuda.craftlife.com.br/"
        >
          <div>
            <h3 class="m-0">Dúvidas frequente</h3>
            <p class="m-0">ajuda.craftlife.com.br</p>
          </div>
          <i class="ml-auto pi pi-question-circle text-4xl"></i>
        </a>
      </div>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.banner {
  background: url('@/assets/imgs/car-banner.jpeg');
  background-position: center;
}
</style>
