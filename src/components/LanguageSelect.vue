<template>

  <select class="
      focus:outline-none 
      focus:ring
     focus:ring-red-500 
      border 
      rounded-md
    border-gray-300  
      h-full 
      p-3
    text-gray-500
    focus:border-red-500
      sm:text-sm
      " 
      v-model.lazy="$i18n.locale">
    <option :selected="[$i18n.locale ? 'selected' : 'f']" v-for="locale in $i18n.availableLocales" :key="locale"
      :value="locale">{{locale}}</option>
  </select>

</template>
  
  <script setup>
  import { ref } from 'vue'


  const selected = ref('en')


  </script>