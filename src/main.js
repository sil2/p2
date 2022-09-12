import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStorage } from "vue3-storage";

import Vue3Storage from "vue3-storage";
import App from '@/App.vue'
import router from '@/router'
import i18n from '@/i18n.js';

import './assets/index.css'
import './assets/app.css'

import en from '@/locales/en.json'
import fr from '@/locales/fr.json'
import VueFeather from 'vue-feather';
import MessageBox from "@/components/partials/MessageBox.vue";

const storage = useStorage();
const pinia = createPinia()

createApp(App)
  .component(VueFeather.name, VueFeather, MessageBox)
  .use(pinia)
  .use(router)
  .use(Vue3Storage)
  .use(i18n)
  .mount('#app')

