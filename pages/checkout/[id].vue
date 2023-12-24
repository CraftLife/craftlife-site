<template>
  <div class="bg-gray-50 rounded-xl shadow-xl">
    <div class="grid grid-cols-1 sm:grid-cols-12">
      <div class="sm:col-span-6 p-4">
        <h1 class="text-2xl mb-2">Seguir para o pagamento</h1>
        <p class="text-sm text-gray-600 mb-4">
          Para completar o seu pagamento preencha os dados pessoais e prossiga para o checkout do mercadopago!
        </p>
        <form class="grid gap-x-4 grid-cols-2 sm:max-w-md" @submit.prevent="pagar">
          <FormInputText v-model="form.name" id="name" label="Nome" />
          <FormInputText v-model="form.surname" id="surname" label="Sobrenome" />
          <FormInputText v-model="form.ign" id="ign" label="Nome no jogo" icon-class="ph ph-user" />
          <FormInputText v-model="form.cpf" id="cpf" label="CPF" />
          <FormInputText
            v-model="form.email"
            class="col-span-2"
            id="email"
            label="E-mail"
            icon-class="ph ph-envelope"
          />

          <button class="col-span-2 bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 mt-4 rounded-lg">
            Pagar com Mercado Pago
          </button>
        </form>
      </div>
      <CheckoutDetailsCard
        class="sm:col-span-6 justify-self-end"
        :price="vip?.price"
        :discount="vip?.discount"
        :name="vip?.name"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import vips from '@/data/vips.json'

const vip = ref()
let mp: any

const form = reactive({
  name: '',
  surname: '',
  ign: '',
  cpf: '',
  email: ''
})

const route = useRoute()
const { data } = useAuth()
const config = useRuntimeConfig()
onMounted(() => {
  // @ts-ignore
  mp = new MercadoPago(config.public.mercadopagoPublicKey)
  vip.value = vips.filter((vip) => vip.id === route.params.id)[0]
  if (data.value) {
    form.ign = data.value.username
    form.email = data.value.email
  }
})

async function pagar() {
  const { pending, data }: any = await useApiFetch('/checkout/order', {
    method: 'POST',
    body: {
      ...form,
      product_id: vip.value.id
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
