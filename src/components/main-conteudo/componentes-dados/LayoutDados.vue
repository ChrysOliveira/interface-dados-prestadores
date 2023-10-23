<template>
  <div class="grid auto-rows-min grid-cols-2 gap-2">
    <div v-for="i in 10" :key="i">
      <label for="numero_documento" class="mb-2 block text-sm font-medium">CNPJ/CPF</label>
      <input
        type="text"
        id="numero_documento"
        class="block w-full cursor-text rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-bgdarkmode dark:text-textdarkmode dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="CNPJ/CPF"
        disabled
        value=""
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
