<template>
  <div class="flex flex-col bg-gray-100 shadow-xl rounded-2xl px-6 py-4 border border-gray-200 m-4 sm:max-w-sm">
    <p class="text-gray-600">Você vai pagar pelo <span class="text-gray-900 font-bold" v-text="name" /></p>
    <p class="text-4xl" v-text="'R$ ' + price" />

    <ul class="mt-4">
      <li>
        <div class="flex items-center space-x-2 text-xl">
          <i class="ph-fill ph-check-circle text-xl text-emerald-400"></i>
          <h2>Pagamento seguro</h2>
        </div>
        <p class="text-gray-600 text-md">
          Ao iniciar o pagamento você será redirecionado para página de pagamento do Mercado Pago em um ambiente
          totalmente seguro!
        </p>
      </li>
      <li class="mt-2">
        <div class="flex items-center space-x-2 text-xl">
          <i class="ph-fill ph-check-circle text-xl text-emerald-400"></i>
          <h2>Ativação rápida</h2>
        </div>
        <p class="text-gray-600 text-md">
          Escolhendo a forma de pagamento cartão ou pix, seu vip será ativado em até 15 minutos, após o mercado pago nos
          enviar a confirmação do pagamento.
        </p>
      </li>
    </ul>
    <div class="bg-pink-500 px-4 py-2 rounded-lg mt-4">
      <p class="text-white text-xs">
        Pagamento 100% garantido, caso não receba seu produto devolvere-mos seu dinheiro na forma de pagamento
        selecionada.
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  name: {
    type: String
  },
  price: {
    type: Number
  }
})
</script>
