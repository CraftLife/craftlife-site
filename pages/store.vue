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
            @click="selectedProduct = '5ab3bc1c-e366-4b87-a460-90ce763a6bef'"
          >
            <span v-text="'Comprar agora por'" />
            <img src="@/assets/images/preco_ouro.png" width="100" />
          </button>
        </div>
        <div class="p-4">
          <img src="@/assets/images/vip_diamante.png" alt="" />
          <button
            class="flex flex-col items-center bg-green-200 hover:bg-green-300 hover:scale-105 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-md w-full"
            @click="selectedProduct = 'ecfd20bf-080c-4c08-a8be-e0432085da14'"
          >
            <span v-text="'Comprar agora por'" />
            <img src="@/assets/images/preco_diamante.png" width="100" />
          </button>
        </div>
        <div class="p-4">
          <img src="@/assets/images/vip_netherite.png" alt="" />
          <button
            class="flex flex-col items-center bg-green-200 hover:bg-green-300 hover:scale-105 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-md w-full"
            @click="selectedProduct = '15df1816-85d8-497b-b941-baf02502afed'"
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
            @click="selectedProduct = '5ab3bc1c-e366-4b87-a460-90ce763a6bef'"
          >
            <span v-text="'Comprar agora por'" />
            <img src="@/assets/images/preco_ouro.png" width="100" />
          </button>
        </div>
        <div class="p-4">
          <button
            class="flex flex-col items-center bg-green-200 hover:bg-green-300 hover:scale-105 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-md w-full"
            @click="selectedProduct = 'ecfd20bf-080c-4c08-a8be-e0432085da14'"
          >
            <span v-text="'Comprar agora por'" />
            <img src="@/assets/images/preco_diamante.png" width="100" />
          </button>
        </div>
        <div class="p-4">
          <button
            class="flex flex-col items-center bg-green-200 hover:bg-green-300 hover:scale-105 transition duration-150 ease-in-out px-4 py-2 rounded-md shadow-md w-full"
            @click="selectedProduct = '15df1816-85d8-497b-b941-baf02502afed'"
          >
            <span v-text="'Comprar agora por'" />
            <img src="@/assets/images/preco_netherite.png" width="100" />
          </button>
        </div>
      </div>
    </div>
    <div v-show="modalVisible" class="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center">
      <div class="relative bg-white px-8 py-4 rounded-xl shadow-xl">
        <button class="absolute top-2 right-2" @click="modalVisible = false">
          <i class="ph ph-x text-red-400 text-xl" />
        </button>
        <h2 class="mb-3">Por favor, insira seu nick para continuar</h2>
        <input
          class="border-2 border-pink-500 rounded-md px-4 py-1 focus:outline-none w-full mb-3"
          type="text"
          v-model="username"
        />
        <button
          class="flex items-center space-x-2 text-white rounded-md bg-pink-400 hover:bg-pink-500 px-4 py-1"
          @click="openCheckoutModal()"
        >
          <span>Continuar</span>
          <i class="ph ph-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import beneficiosSessoes from '@/data/vantagens-vip.json'

const config = useRuntimeConfig()
let mp: any
onMounted(() => {
  // @ts-ignore
  mp = new MercadoPago(config.public.mercadopagoPublicKey)
})

const selectedProduct = ref('')
const modalVisible = ref(false)
const username = ref('')

watch(selectedProduct, () => {
  modalVisible.value = true
})

async function openCheckoutModal() {
  modalVisible.value = false
  const { pending, data }: any = await useApiFetch('/checkout', {
    method: 'POST',
    body: {
      username: username.value,
      product_id: selectedProduct.value
    }
  })
  mp.checkout({
    preference: {
      id: data.value.mercadopago_preference_id
    },
    autoOpen: true
  })
}
</script>
