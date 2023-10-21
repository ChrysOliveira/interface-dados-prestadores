<template>
  <nav
    class="h-14 border-b-2 border-douradoclaro bg-white text-black dark:border-douradoescuro dark:bg-bgdarkmode dark:text-textdarkmode"
  >
    <div class="mx-auto flex h-full max-w-screen-xl flex-wrap items-center justify-between px-4">
      <a href="#" class="flex h-full items-center">
        <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> -->
        <span class="self-center whitespace-nowrap text-2xl font-semibold">Dados Prestador</span>
      </a>
      <div
        class="flex h-max w-auto flex-row flex-nowrap items-center gap-x-2 divide-x-2 divide-douradoclaro dark:divide-douradoescuro"
        id="navbar-dropdown"
      >
        <ul class="flex flex-row space-x-8 rounded-lg px-4 font-medium md:flex-row">
          <LinkNav>UNS</LinkNav>
          <DropdownNav menuTargetId="dropdownNavbar">Menu</DropdownNav>
          <!-- Dropdown menu -->
          <MenuDropDownNav
            menuId="dropdownNavbar"
            :linkList="[
              { link: '#', texto: 'Impressão de contrato' },
              { link: '#', texto: 'Impressão de carta de rescisão' },
              { link: '#', texto: 'Listagem AMHPDF' },
              { link: '#', texto: 'Listagem MediService' }
            ]"
          ></MenuDropDownNav>
          <LinkNav>Intranet</LinkNav>
        </ul>
        <div class="flex-column flex items-center justify-between">
          <button
            @click="toggleDark()"
            id="theme-toggle"
            type="button"
            class="rounded-lg px-4 text-sm hover:bg-douradoclaro dark:hover:bg-douradoescuro"
          >
            <svg
              id="theme-toggle-dark-icon"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ hidden: mudaIconeDarkMode() }"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ hidden: !mudaIconeDarkMode() }"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { reactive } from 'vue'
import LinkNav from '@/components/menu-superior/LinkNav.vue'
import DropdownNav from '@/components/menu-superior/DropdownNav.vue'
import MenuDropDownNav from '@/components/menu-superior/MenuDropDownNav.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

function mudaIconeDarkMode() {
  if (isDark.value === false) {
    return false
  } else {
    return true
  }
}
</script>
<style scoped></style>
