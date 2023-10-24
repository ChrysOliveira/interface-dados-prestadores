<template>
  <li>
    <a
      :href="props.href"
      target="_blank"
      class="flex flex-row items-center justify-between rounded py-2 pl-3 pr-4 hover:bg-transparent hover:text-azulescuro dark:hover:text-azulclaro md:border-0 md:p-0"
      ><slot />
      <svg
        class="ml-2.5 h-2.5 w-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
        /></svg
    ></a>
  </li>
</template>

<script setup lang="ts">
const props = defineProps(['href'])
</script>

<style scoped></style>
