<template>
  <ComponentesInterativos class="row-start-1 self-center rounded p-2" />
  <ComponentesDados
    class="= row-start-2 h-full w-full self-center rounded-xl border-2 border-douradoclaro p-2 dark:border-douradoescuro"
  />
</template>

<script setup lang="ts">
import ComponentesInterativos from '@/components/main-conteudo/componentes-interativos/ComponentesInterativos.vue'
import ComponentesDados from '@/components/main-conteudo/componentes-dados/ComponentesDados.vue'
</script>

<style scoped></style>
