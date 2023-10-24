<template>
  <MenuSuperior />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

import MenuSuperior from '@/components/menu-superior/MenuSuperior.vue'

onMounted(() => {
  initFlowbite()
})
</script>

<style scoped></style>
