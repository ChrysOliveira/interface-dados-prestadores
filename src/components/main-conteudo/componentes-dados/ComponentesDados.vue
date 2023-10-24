<template>
  <LayoutDados v-if="abaAtivaStore.abaAtiva === 1" />
  <LayoutEnderecos v-else-if="abaAtivaStore.abaAtiva === 2" />
</template>

<script setup lang="ts">
import LayoutDados from '@/components/main-conteudo/componentes-dados/LayoutDados.vue'
import LayoutEnderecos from '@/components/main-conteudo/componentes-dados/LayoutEnderecos.vue'
import { useAbaAtivaStore } from '@/stores/abaAtiva.ts'

const abaAtivaStore = useAbaAtivaStore()
</script>

<style scoped></style>
