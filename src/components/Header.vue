<template>

  <NavBar />
  <LanguageSelect />

  

</template>


<script>

import NavBar from "@/components/NavBar.vue";
import LanguageSelect from "@/components/LanguageSelect.vue";

export default {
  name: "header",
  components: {
    NavBar,
    LanguageSelect
  }
};

</script>