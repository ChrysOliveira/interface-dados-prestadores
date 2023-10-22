<template>
  <div class="flex-column flex flex-wrap justify-center gap-y-2">
    <div class="flex h-min w-full flex-row gap-2">
      <BarraPesquisaPrestador class="h-max w-3/4" />
      <BotaoVerde class="h-auto w-1/4">Cadastrar novo prestador</BotaoVerde>
    </div>
    <MenuDadosPrestador />
  </div>
</template>

<script setup lang="ts">
import BarraPesquisaPrestador from '@/components/main-conteudo/BarraPesquisaPrestador.vue'
import MenuDadosPrestador from '@/components/main-conteudo/MenuDadosPrestador.vue'
import BotaoVerde from '@/components/utils/BotaoVerde.vue'
</script>

<style scoped></style>
