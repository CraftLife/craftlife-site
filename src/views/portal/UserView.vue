<template>
  <!-- <DataTable
      v-model:filters="filters"
      v-model:selection="selectedCustomers"
      :value="users"
      paginator
      :rows="10"
      dataKey="id"
      filterDisplay="menu"
      :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']"
    ></DataTable> -->
  <DataTable
    v-model:filters="filters"
    v-model:rows="pageable.size"
    :value="users"
    :rows-per-page-options="[5, 10, 20, 50]"
    :total-records="pageable.total"
    :globalFilterFields="['username']"
    lazy
    paginator
    dataKey="id"
    filterDisplay="menu"
    @page="onPage"
    @sort="onSort"
    @filter="onFilter"
    @row-click=""
  >
    <template #header>
      <div class="flex justify-between">
        <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <!-- <InputText v-model="filters['global'].value" placeholder="Keyword Search" /> -->
        </IconField>
      </div>
    </template>
    <template #empty> No customers found. </template>
    <Column field="id" header="Id" sortable />
    <Column field="username" header="Nome de usuário" sortable>
      <template #filter="{ filterModel }">
        <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
      </template>
    </Column>
    <Column field="email" header="E-mail" sortable />
    <Column field="last_login" header="Último login" sortable>
      <template #body="{ data }">
        {{ formatRelativeDate(data.last_login) }}
      </template>
    </Column>
    <!-- <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Name" sortable style="min-width: 14rem">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
        </template>
      </Column>
      <Column header="Country" sortable sortField="country.name" filterField="country.name" style="min-width: 14rem">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <img
              alt="flag"
              src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
              :class="`flag flag-${data.country.code}`"
              style="width: 24px"
            />
            <span>{{ data.country.name }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by country" />
        </template>
      </Column>
      <Column
        header="Agent"
        sortable
        sortField="representative.name"
        filterField="representative"
        :showFilterMatchModes="false"
        :filterMenuStyle="{ width: '14rem' }"
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <img
              :alt="data.representative.name"
              :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
              style="width: 32px"
            />
            <span>{{ data.representative.name }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any">
            <template #option="slotProps">
              <div class="flex items-center gap-2">
                <img
                  :alt="slotProps.option.name"
                  :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`"
                  style="width: 32px"
                />
                <span>{{ slotProps.option.name }}</span>
              </div>
            </template>
          </MultiSelect>
        </template>
      </Column>
      <Column field="date" header="Date" sortable filterField="date" dataType="date" style="min-width: 10rem">
        <template #body="{ data }">
          {{ formatDate(data.date) }}
        </template>
        <template #filter="{ filterModel }">
          <DatePicker v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
        </template>
      </Column>
      <Column
        field="balance"
        header="Balance"
        sortable
        filterField="balance"
        dataType="numeric"
        style="min-width: 10rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.balance) }}
        </template>
        <template #filter="{ filterModel }">
          <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
        </template>
      </Column>
      <Column header="Status" field="status" sortable :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
        <template #filter="{ filterModel }">
          <Select v-model="filterModel.value" :options="statuses" placeholder="Select One" showClear>
            <template #option="slotProps">
              <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
            </template>
          </Select>
        </template>
      </Column>
      <Column field="activity" header="Activity" sortable :showFilterMatchModes="false" style="min-width: 12rem">
        <template #body="{ data }">
          <ProgressBar :value="data.activity" :showValue="false" style="height: 6px"></ProgressBar>
        </template>
        <template #filter="{ filterModel }">
          <Slider v-model="filterModel.value" range class="m-4"></Slider>
          <div class="flex items-center justify-between px-2">
            <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
            <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
          </div>
        </template>
      </Column>
      <Column headerStyle="width: 5rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
        <template #body>
          <Button type="button" icon="pi pi-cog" rounded />
        </template>
      </Column>
       -->
  </DataTable>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFormatter } from '@/composables'
import axios from '@/plugins/axios'

const { formatRelativeDate } = useFormatter()
const users = ref([])
const pageable = ref({
  page: 0,
  size: 10,
  total: 0,
  sort: '',
  filters: {}
})
const filters = ref()
onMounted(() => {
  getUsers()
})
const onPage = (event: any) => {
  pageable.value.page = event.page
  getUsers()
}
const onSort = (event: any) => {
  pageable.value.sort = `${event.sortField},${event.sortOrder === 1 ? 'asc' : 'desc'}`
  getUsers()
}
const onFilter = (_event: any) => {
  // for (const [key, filter] of Object.entries(event.filters)) {
  // const value = filter.value
  // const matchMode = filter.matchMode
  // pageable.value.filters[`${key}.${matchMode}`] = value
  // }

  getUsers()
}

const getUsers = () => {
  axios
    .get('api/user', {
      params: {
        page: pageable.value.page,
        size: pageable.value.size,
        sort: pageable.value.sort,
        ...pageable.value.filters
      }
    })
    .then((response) => {
      users.value = response.data.content
      pageable.value.total = response.data.totalElements
    })
}

const initFilters = () => {
  filters.value = {
    // global: {
    //   value: '',
    //   matchMode: 'contains'
    // },
    username: { value: '', matchMode: 'contains' }
  }
}

initFilters()

const clearFilter = () => {
  initFilters()
}
</script>
