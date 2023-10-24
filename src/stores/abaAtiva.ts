import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAbaAtivaStore = defineStore('abaAtiva', () => {
  const abaAtiva = ref(0)
  return { abaAtiva }
})
