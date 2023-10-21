<template>
  <div
    :id="props.menuId"
    class="z-10 hidden w-44 rounded-lg border-2 border-douradoclaro bg-white font-normal shadow dark:border-douradoescuro dark:bg-bgdarkmode"
  >
    <ul class="py-2 text-sm" aria-labelledby="dropdownLargeButton">
      <li v-for="item in props.linkList" :key="item.id">
        <a
          :href="item.link"
          class="block px-4 py-2 hover:bg-douradoclaro dark:hover:bg-douradoescuro"
          >{{ item.texto }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps(['menuId', 'linkList'])
</script>

<style scoped></style>
