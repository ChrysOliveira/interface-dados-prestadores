import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HeaderApp from '@/apps/HeaderApp.vue'
import MainApp from '@/apps/MainApp.vue'

const mainApp = createApp(MainApp)
mainApp.use(createPinia())
mainApp.mount('#main-app')

const headerApp = createApp(HeaderApp)
headerApp.use(createPinia())
headerApp.mount('#header-app')
