import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MainApp from './MainApp.vue'
import HeaderApp from './HeaderApp.vue'

const mainApp = createApp(MainApp)
mainApp.use(createPinia())
mainApp.mount('#main-app')

const headerApp = createApp(HeaderApp)
headerApp.use(createPinia())
headerApp.mount('#header-app')
