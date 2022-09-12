<template>



  <div class="container mx-auto">
    <Header></Header>
    <Message message="123"></Message>
    <router-view></router-view>
    <Footer></Footer>
  </div>


</template>


<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";



</script>