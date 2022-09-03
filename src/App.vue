<template>
 <div id="app" class="container">

<Header></Header>
<router-view></router-view>
<Footer></Footer>
</div>
</template>
 
<script>

import Header from "./components/Рeader.vue";
import Footer from "./components/Аooter.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,

  }
};


</script>