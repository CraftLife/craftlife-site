<template>
  <div class="space-y-3">
    <DataTable
      :value="punishmentsResponse?.content || []"
      lazy
      :loading="pending"
      paginator
      :rows="10"
      :totalRecords="punishmentsResponse?.totalElements || 0"
      @page="onPage($event)"
    >
      <Column field="id" header="ID"></Column>
      <Column field="banned_data.name" header="Jogador"></Column>
      <Column field="reason" header="Motivo"></Column>
      <Column field="banned_by_name" header="Staff"></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const { token } = useAuth()

const { pending, data: punishmentsResponse } = useApiFetch('/punishment/bans', {
  headers: {
    Authorization: token.value || ''
  }
})

const onPage = () => {}
</script>
