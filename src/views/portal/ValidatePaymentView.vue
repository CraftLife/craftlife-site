<template>
  <Card>
    <template #content>
      <div class="grid">
        <div class="col-12 sm:col-6 md:col-4 flex flex-column gap-2">
          <label for="transaction-number">Número da transação</label>
          <InputText id="transaction-number" v-model="transactionNumber" />
        </div>
        <div class="col-12 sm:col-6 md:col-4 flex align-items-end">
          <Button
            label="Consultar"
            icon="pi pi-search"
            @click="consultPayment"
            :loading="paymentResponse?.isFetching"
          ></Button>
        </div>
      </div>
    </template>
  </Card>
  <Card class="mt-2" v-if="paymentResponse?.isFinished">
    <template #content>
      <div class="grid">
        <div class="col-12 md:col-4 flex align-items-center">
          <img
            class="w-3rem h-3rem border-round"
            :src="`https://mineskin.eu/helm/${paymentResponse.data.username}/64.svg`"
            alt=""
          />
          <div class="ml-3">
            <p class="m-0 font-bold">{{ paymentResponse.data.username }}</p>
            <p class="m-0 text-sm">{{ paymentResponse.data.productName }}</p>
          </div>
        </div>
        <div class="col-12 md:col-4 my-auto">
          <p class="m-0 font-bold">Data de pagamento</p>
          <p class="m-0">
            {{ formatDate(paymentResponse.data.dateApproved) }}
          </p>
        </div>
        <div class="col-12 md:col-4 my-auto">
          <p class="m-0 font-bold">Status</p>
          <p class="m-0">
            {{
              paymentResponse.data.status === 'approved'
                ? 'Aprovado'
                : paymentResponse.data.status === 'refunded'
                ? 'Reembolsado'
                : paymentResponse.data.status
            }}
          </p>
        </div>
        <div class="col-12 md:col-4 my-auto">
          <p class="m-0 font-bold">Processamento iniciado</p>
          <p class="m-0">
            {{ paymentResponse.data.processingStarted ? 'Sim' : 'Não' }}
          </p>
        </div>
        <div class="col-12 md:col-4 my-auto">
          <p class="m-0 font-bold">Entregue</p>
          <p class="m-0">
            {{ paymentResponse.data.delivered ? 'Sim' : 'Não' }}
          </p>
        </div>
      </div>
      <div class="flex justify-content-end mt-3">
        <Button
          label="Iniciar processamento"
          @click="startProcessing"
          :disabled="paymentResponse.data.processingStarted || paymentResponse.data.status !== 'approved'"
        ></Button>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useFetch } from '@/composables'
import moment from 'moment'
const transactionNumber = ref()

const paymentResponse = ref()

const consultPayment = () => {
  paymentResponse.value = useFetch(`/payment/${transactionNumber.value}`).json()
}

const startProcessing = async () => {
  await useFetch(`/checkout/mercadopago/confirmation?source_news=ipn&id=${transactionNumber.value}&topic=payment`)
    .post()
    .json()

  consultPayment()
}

const formatDate = (value: number) => {
  return moment(value).format('DD/MM/YYYY HH:mm')
}
</script>
