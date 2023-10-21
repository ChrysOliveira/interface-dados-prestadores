<template>
  <button
    id="dropdownNavbarLink"
    :data-dropdown-toggle="props.menuTargetId"
    data-dropdown-trigger="hover"
    data-dropdown-delay="100"
    class="flex w-auto items-center justify-between rounded border-0 p-0 hover:bg-transparent hover:text-azulescuro dark:hover:text-azulclaro"
  >
    <slot />
    <svg
      class="ml-2.5 h-2.5 w-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps(['menuTargetId'])
</script>

<style scoped></style>
