<template>
  <div>
    <div class="bg-gray-50 rounded-xl shadow-xl">
      <div class="flex items-center space-x-4 p-8 border-dashed border-b-2 shadow-lg">
        <i class="ph ph-sketch-logo text-6xl text-cyan-400"></i>

        <div class="text-gray-600">
          <h1 class="text-4xl font-bold">SEJA VIP!</h1>
          <h2>Confira todas as vantagens de ativar cada VIP em nossos servidores.</h2>
        </div>
      </div>

      <div class="grid grid-cols-3">
        <div class="p-4">
          <img src="@/assets/images/vip_ouro.png" alt="" />
          <button
            class="flex flex-col items-center bg-green-200 hover:bg-green-300 hover:scale-105 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-md w-full"
          >
            <span v-text="'Comprar agora por'" />
            <img src="@/assets/images/preco_ouro.png" width="100" />
          </button>
        </div>
        <div class="p-4">
          <img src="@/assets/images/vip_diamante.png" alt="" />
          <button
            class="flex flex-col items-center bg-green-200 hover:bg-green-300 hover:scale-105 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-md w-full"
          >
            <span v-text="'Comprar agora por'" />
            <img src="@/assets/images/preco_diamante.png" width="100" />
          </button>
        </div>
        <div class="p-4">
          <img src="@/assets/images/vip_netherite.png" alt="" />
          <button
            class="flex flex-col items-center bg-green-200 hover:bg-green-300 hover:scale-105 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-md w-full"
          >
            <span v-text="'Comprar agora por'" />
            <img src="@/assets/images/preco_netherite.png" width="100" />
          </button>
        </div>
      </div>
      <div v-for="section in beneficiosSessoes">
        <h1 class="bg-gray-700 text-white font-semibold text-3xl py-4 text-center">{{ section.name }}</h1>
        <div
          v-for="(benefit, index) in section.benefits"
          class="grid grid-cols-3"
          :class="{ 'bg-pink-50': index % 2 === 0, 'bg-white': index % 2 !== 0 }"
        >
          <div class="flex flex-col justify-end text-center mx-4 my-2">
            <div v-text="benefit.name" class="text-left" />
            <div v-if="typeof benefit.descriptions.gold === 'boolean'">
              <i v-if="benefit.descriptions.gold" class="ph-fill ph-seal-check text-3xl text-yellow-300"></i>
              <i v-else class="ph-fill ph-x-circle text-3xl text-gray-500"></i>
            </div>
            <div v-else v-text="benefit.descriptions.gold" />
          </div>
          <div class="flex flex-col justify-end text-center mx-4 my-2">
            <template v-if="typeof benefit.descriptions.diamond === 'boolean'">
              <i v-if="benefit.descriptions.diamond" class="ph-fill ph-seal-check text-3xl text-cyan-300"></i>
              <i v-else class="ph-fill ph-x-circle text-3xl text-gray-500"></i>
            </template>
            <div v-else v-text="benefit.descriptions.diamond" />
          </div>
          <div class="flex flex-col justify-end text-center mx-4 my-2">
            <template v-if="typeof benefit.descriptions.netherite === 'boolean'">
              <i v-if="benefit.descriptions.netherite" class="ph-fill ph-seal-check text-3xl text-red-500"></i>
              <i v-else class="ph-fill ph-x-circle text-3xl text-gray-500"></i>
            </template>
            <div v-else v-text="benefit.descriptions.netherite" />
          </div>
        </div>
      </div>
      <div>
        <table class="table-auto">
          <tbody>
            <tr v-for="(beneficio, index) in beneficiosSessoes"></tr>
          </tbody>
        </table>
      </div>
      <div class="grid grid-cols-3">
        <div class="p-4">
          <button
            class="flex flex-col items-center bg-green-200 hover:bg-green-300 hover:scale-105 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-md w-full"
          >
            <span v-text="'Comprar agora por'" />
            <img src="@/assets/images/preco_ouro.png" width="100" />
          </button>
        </div>
        <div class="p-4">
          <button
            class="flex flex-col items-center bg-green-200 hover:bg-green-300 hover:scale-105 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-md w-full"
          >
            <span v-text="'Comprar agora por'" />
            <img src="@/assets/images/preco_diamante.png" width="100" />
          </button>
        </div>
        <div class="p-4">
          <button
            class="flex flex-col items-center bg-green-200 hover:bg-green-300 hover:scale-105 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-md w-full"
          >
            <span v-text="'Comprar agora por'" />
            <img src="@/assets/images/preco_netherite.png" width="100" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import beneficiosSessoes from '@/data/vantagens-vip.json'
</script>
