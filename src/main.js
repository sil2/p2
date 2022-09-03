import { createApp } from 'vue'
import './assets/index.css'

import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import fr from '@/locales/fr.json'

import App from './App.vue'
import router from './router'

const i18n = createI18n({
    locale: 'en',
    messages: {
      en,
      fr
    }
  })
  

createApp(App)
.use(router)
.use(i18n)
.mount('#app')
