<template>

  <NavBar />
  <LanguageSelect />

  

</template>


<script>

import NavBar from "@/components/NavBar.vue";
import LanguageSelect from "@/components/LanguageSelect.vue";

export default {
  name: "appHeader",
  components: {
    NavBar,
    LanguageSelect
  }
};

</script>