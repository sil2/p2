import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { useStorage } from "vue3-storage";

import Vue3Storage from "vue3-storage";
import App from './App.vue'
import router from './router'
import UserService from '@/services/user.service'

import './assets/index.css'
import './assets/app.css'

import en from '@/locales/en.json'
import fr from '@/locales/fr.json'
import VueFeather from 'vue-feather';


const storage = useStorage();
const pinia = createPinia()



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
.use(pinia)
.use(router)
.use(Vue3Storage)
.use(i18n)
.component(VueFeather.name, VueFeather)
.mount('#app')

//if (storage.hasKey('auth_token')) {
//  UserService.get()
//}