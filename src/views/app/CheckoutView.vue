<template>
  <Card>
    <template #header>
      <div class="flex items-center gap-3 border-dashed border-b-2 p-4">
        <i class="pi pi-credit-card text-6xl text-primary-500"></i>
        <div>
          <h1 class="m-0 text-2xl">Seguir para o pagamento</h1>
          <p class="m-0 text-surface-600">
            Para completar o seu pagamento preencha os dados pessoais e prossiga para o checkout do mercadopago!
          </p>
        </div>
      </div>
    </template>
    <template #content>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <form class="grid grid-cols-1 md:grid-cols-2 gap-3" @submit.prevent="onSubmit">
            <div class="field">
              <label for="name">Nome</label>
              <InputText v-model="form.name" id="name" class="w-full" required />
            </div>
            <div class="field">
              <label for="surname">Sobrenome</label>
              <InputText v-model="form.surname" id="surname" class="w-full" required />
            </div>
            <div class="field md:col-span-2">
              <label for="email">Email</label>
              <InputText v-model="form.email" id="email" class="w-full" required />
            </div>
            <div class="field">
              <label for="cpf">CPF</label>
              <InputText v-model="form.cpf" id="cpf" class="w-full" required />
            </div>
            <div class="field">
              <label for="ign">Nome no jogo</label>
              <InputText :value="user?.username" id="ign" class="w-full" disabled required />
            </div>

            <Button
              type="submit"
              class="w-full mt-3 md:col-span-2"
              label="Pagar com Mercado Pago"
              :disabled="!user?.username"
            ></Button>
          </form>
        </div>
        <div class="flex justify-end">
          <Card class="w-full max-w-[25rem] surface-ground" pt:body:class="p-3">
            <template #content>
              <h1 class="mt-0 text-base font-normal">
                Você vai pagar pelo <b>{{ product?.name }}</b>
              </h1>
              <span class="text-5xl font-semibold">R$ {{ formatCurrency(product?.price) }}</span>

              <ul class="list-none pl-0 flex flex-col gap-4 mt-3">
                <li>
                  <div class="flex items-center gap-2 text-xl">
                    <i class="pi pi-check-circle text-green-500"></i>
                    <span>Pagamento seguro</span>
                  </div>
                  <p class="mt-0">
                    Ao iniciar o pagamento você será redirecionado para página de pagamento do Mercado Pago em um
                    ambiente totalmente seguro!
                  </p>
                </li>
                <li>
                  <div class="flex items-center gap-2 text-xl">
                    <i class="pi pi-check-circle text-green-500"></i>
                    <span>Ativação rápida</span>
                  </div>
                  <p class="mt-0">
                    Escolhendo a forma de pagamento cartão ou pix, seu {{ product?.name }} será ativado em até 15
                    minutos, após o mercado pago nos enviar a confirmação do pagamento.
                  </p>
                </li>
              </ul>
              <div class="p-2 bg-primary-400 text-primary-50 rounded-lg mt-4">
                Pagamento 100% garantido, caso não receba seu produto devolvere-mos seu dinheiro na forma de pagamento
                selecionada.
              </div>
            </template>
          </Card>
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useFetch, useAuth, useFormatter } from '@/composables'
import { useRoute } from 'vue-router'

const { user } = useAuth()
const { formatCurrency } = useFormatter()

const product = ref()

const form = ref({
  name: '',
  surname: '',
  email: '',
  cpf: ''
})

const route = useRoute()
let mp: any
onMounted(() => {
  getProduct()
})

const getProduct = () => {
  // @ts-ignore
  mp = new MercadoPago(process.env.VITE_MP_PUBLIC_KEY)

  useFetch(`product/${route.params.productId}`)
    .get()
    .json()
    .then(({ data }) => {
      product.value = data.value
    })
}

const onSubmit = () => {
  useFetch('checkout/order')
    .post({ ...form.value, ign: user.value?.username, product_id: product.value?.id })
    .json()
    .then(({ data }) => {
      mp.checkout({
        preference: {
          id: data.value.mercadopago_preference_id
        },
        autoOpen: true
      })
    })
}
</script>
