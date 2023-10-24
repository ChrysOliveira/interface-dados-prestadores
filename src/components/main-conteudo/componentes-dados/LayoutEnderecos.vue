<template>
  <div id="accordion-open" data-accordion="open">
    <h2 id="accordion-open-heading-1">
      <button
        type="button"
        class="flex w-full items-center justify-between rounded-t-xl border border-b-0 border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
        data-accordion-target="#accordion-open-body-1"
        aria-expanded="true"
        aria-controls="accordion-open-body-1"
      >
        <span class="flex items-center"
          ><svg
            class="mr-2 h-5 w-5 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          What is Flowbite?</span
        >
        <svg
          data-accordion-icon
          class="h-3 w-3 shrink-0 rotate-180"
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
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div id="accordion-open-body-1" class="hidden" aria-labelledby="accordion-open-heading-1">
      <div class="border border-b-0 border-gray-200 p-5 dark:border-gray-700 dark:bg-gray-900">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on top of Tailwind CSS
          including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to
          <a
            href="/docs/getting-started/introduction/"
            class="text-blue-600 hover:underline dark:text-blue-500"
            >get started</a
          >
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemLabelInformacao from '@/components/main-conteudo/componentes-dados/ItemLabelInformacao.vue'
import { usePrestadorStore } from '@/stores/prestador.ts'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})

const prestadorStore = usePrestadorStore()
</script>

<style scoped></style>
