<template>
  <div class="border-b border-douradoclaro dark:border-douradoescuro">
    <ul
      class="-mb-px flex flex-wrap text-center text-sm font-medium text-gray-500 dark:text-textdarkmode"
    >
      <ItemMenuDadosPrestador
        v-for="item in listaMenuDadosPrestador"
        @click="MudaItemSelecionadoMenuDados(item.id)"
        :key="item.id"
        :icone="item.icone"
        :habilitado="item.habilitado"
        :selecionado="item.selecionado"
        >{{ item.texto }}</ItemMenuDadosPrestador
      >
    </ul>
  </div>
</template>

<script setup lang="ts">
import ItemMenuDadosPrestador from '@/components/main-conteudo/ItemMenuDadosPrestador.vue'
import { ref } from 'vue'

const listaMenuDadosPrestador = ref([
  {
    id: 1,
    icone:
      'M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z',
    habilitado: true,
    selecionado: false,
    texto: 'Dados'
  },
  {
    id: 2,
    icone:
      'm19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z',
    habilitado: true,
    selecionado: false,
    texto: 'Endereços'
  },
  {
    id: 3,
    icone:
      'M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z',
    habilitado: true,
    selecionado: false,
    texto: 'Especialidades'
  },
  {
    id: 4,
    icone:
      'M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM5 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm0-3H9a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Zm0-3H9a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z',
    habilitado: true,
    selecionado: false,
    texto: 'Redes'
  },
  {
    id: 5,
    icone:
      'M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z',
    habilitado: true,
    selecionado: false,
    texto: 'Corpo Clínico'
  }
])

function MudaItemSelecionadoMenuDados(id) {
  listaMenuDadosPrestador.value.forEach((item) => {
    if (item.id === id && item.selecionado === true) {
      return
    } else if (item.id !== id) {
      item.selecionado = false
    } else {
      item.selecionado = true
    }
  })
}
</script>

<style scoped></style>
