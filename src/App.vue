<template>

<div id="app" class="container">

  <Header></Header>
  
  <router-view></router-view>
    <Footer></Footer>
  </div>
  


</template>

<script>

import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,

  }
};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
