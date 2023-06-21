<template>
  <div>
    <div class="bg-gray-50 rounded-xl shadow-xl">
      <div class="flex items-center space-x-4 p-8 border-dashed border-b-2 shadow-lg">
        <i class="ph-bold ph-headset text-6xl text-gray-600"></i>
        <div class="text-gray-600">
          <h1 class="text-4xl font-bold">CONTATO</h1>
          <h2>Confira como você pode entrar em contato com a gente!</h2>
        </div>
      </div>
      <div class="p-8 max-w-xl mx-auto space-y-4">
        <a
          class="flex justify-between items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-xl shadow-md cursor-pointer transition-all duration-150 hover:scale-105 hover:bg-gray-200"
          href="https://api.whatsapp.com/send?phone=5562992638525"
          target="_blank"
        >
          <div>
            <h2 class="text-xl font-semibold">Whatsapp</h2>
            <p>+55 62 99263-8525</p>
          </div>
          <i class="ph ph-whatsapp-logo text-4xl"></i>
        </a>
        <a
          class="flex justify-between items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-xl shadow-md cursor-pointer transition-all duration-150 hover:scale-105 hover:bg-gray-200"
          href="mailto:contato@craftlife.com.br"
          target="_blank"
        >
          <div>
            <h2 class="text-xl font-semibold">Email</h2>
            <p>contato@craftlife.com.br</p>
          </div>
          <i class="ph ph-envelope text-4xl"></i>
        </a>
        <a
          class="flex justify-between items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-xl shadow-md cursor-pointer transition-all duration-150 hover:scale-105 hover:bg-gray-200"
          href="https://ajuda.craftlife.com.br/"
          target="_blank"
        >
          <div>
            <h2 class="text-xl font-semibold">Dúvidas Frequente</h2>
            <p>https://ajuda.craftlife.com.br</p>
          </div>
          <i class="ph ph-question text-4xl"></i>
        </a>
      </div>
    </div>
  </div>
</template>
