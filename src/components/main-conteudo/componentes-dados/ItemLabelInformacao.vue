<template>
  <div
    :class="{
      hidden: !props.habilitado
    }"
  >
    <label :for="props.nomeInformacao" class="mb-2 block text-sm font-medium">{{
      props.descricaoLabel
    }}</label>
    <input
      type="text"
      :id="props.nomeInformacao"
      class="block w-full cursor-text rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-bgdarkmode dark:text-textdarkmode dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      :placeholder="props.descricaoLabel"
      disabled
      :value="props.valorInformacao"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['nomeInformacao', 'descricaoLabel', 'valorInformacao', 'habilitado'])
</script>

<style scoped></style>
