<template>
  <div class="grid auto-rows-min grid-cols-2 gap-2">
    <ItemLabelInformacao
      nome-informacao="numero_contrato"
      descricao-label="Numero do contrato"
      :valor-informacao="prestadorStore.numeroContrato"
      :habilitado="true"
    />
    <ItemLabelInformacao
      nome-informacao="numero_documento"
      descricao-label="CNPJ/CPF"
      :valor-informacao="prestadorStore.numeroDocumento"
      :habilitado="true"
    />
    <ItemLabelInformacao
      nome-informacao="razao_social"
      descricao-label="Razão Social"
      :valor-informacao="prestadorStore.razaoSocial"
      :habilitado="true"
    />
    <ItemLabelInformacao
      nome-informacao="nome_divulgacao"
      descricao-label="Nome de divulgação"
      :valor-informacao="null"
      :habilitado="true"
    />
    <ItemLabelInformacao
      nome-informacao="data_credenciamento"
      descricao-label="Data credenciamento"
      :valor-informacao="null"
      :habilitado="true"
    />
    <ItemLabelInformacao
      nome-informacao="data_descredenciamento"
      descricao-label="Data descredenciamento"
      :valor-informacao="null"
      :habilitado="true"
    />
    <ItemLabelInformacao
      nome-informacao="inscricao_municipal"
      descricao-label="Inscrição Municipal"
      :valor-informacao="null"
      :habilitado="true"
    />
  </div>
</template>

<script setup lang="ts">
import ItemLabelInformacao from '@/components/main-conteudo/componentes-dados/ItemLabelInformacao.vue'
import { usePrestadorStore } from '@/stores/prestador.ts'

const prestadorStore = usePrestadorStore()
</script>

<style scoped></style>
