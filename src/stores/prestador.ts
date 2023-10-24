import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePrestadorStore = defineStore('prestador', () => {
  const numeroContrato = ref('')
  const numeroDocumento = ref('')
  const razaoSocial = ref('')
  return { numeroContrato, numeroDocumento, razaoSocial }
})
