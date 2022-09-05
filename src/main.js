import { createApp } from 'vue'
import './assets/index.css'
import './assets/app.css'

import { createI18n } from 'vue-i18n'

import Vue3Storage from "vue3-storage";

import en from '@/locales/en.json'
import fr from '@/locales/fr.json'

import App from './App.vue'
import router from './router'

import store from './store'

const i18n = createI18n({
    locale: 'en',
    legacy: false,
    globalInjection: true,
    locale: "en",
    fallbackLocale: "en",
    messages: {
      en,
      fr
    }
  })
  


createApp(App)
.use(router)
.use(Vue3Storage)
.use(i18n)
.use(store)

.mount('#app')
