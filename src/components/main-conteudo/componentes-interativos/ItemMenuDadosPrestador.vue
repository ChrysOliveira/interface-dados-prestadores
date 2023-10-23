<template>
  <li class="mr-2">
    <a
      href="#"
      class="group inline-flex items-center justify-center rounded-t-lg border-b-2 p-4"
      :class="{
        'cursor-not-allowed': !props.habilitado,
        'text-blue-600': props.selecionado,
        'border-blue-600': props.selecionado,
        active: props.selecionado,
        'dark:text-blue-500': props.selecionado,
        'dark:border-blue-500': props.selecionado,
        'hover:border-gray-300': !props.selecionado,
        'hover:text-gray-600': !props.selecionado,
        'dark:hover:text-gray-300': !props.selecionado,
        'border-transparent': !props.selecionado
      }"
    >
      <svg
        class="mr-2 h-4 w-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 20"
        :class="{
          'text-blue-600': props.selecionado,
          'dark:text-blue-500': props.selecionado,
          'text-gray-400': !props.selecionado,
          'group-hover:text-gray-500': !props.selecionado,
          'dark:text-gray-500': !props.selecionado,
          'dark:group-hover:text-gray-300': !props.selecionado
        }"
      >
        <path :d="props.icone" />
      </svg>
      <slot />
    </a>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps(['icone', 'habilitado', 'selecionado'])
</script>

<style scoped></style>
