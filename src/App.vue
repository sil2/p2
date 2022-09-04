<template>
  <div id="app" class="container mx-auto">

    <Header></Header>

    <div class="p-1">
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>
</template>
 
<script>


import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Login from "@/components/Login.vue";

export default {
  name: "app",
  components: {
    Header,
    NavBar,
    Footer,
    Login
  }
};


</script>