<template>



  <div class="container ">
    <Header></Header>
    <Message message="123"></Message>
    <div class="flex flex-col h-screen">
      <router-view></router-view>
      <Footer></Footer>
    </div>
  </div>
</template>


<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useStorage } from "vue3-storage";
import { ref } from 'vue'

const storage = useStorage();

i18n.global.locale.value = storage.hasKey('locale') ? storage.getStorageSync('locale') : 'fr'

</script>