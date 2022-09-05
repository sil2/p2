<template>

  <select @change="setLocale" class="
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
      v-model.lazy="$i18n.locale"
  >
    <option :selected="[$i18n.locale ? 'selected' : '']" v-for="locale in $i18n.availableLocales" :key="locale"
      :value="locale">{{locale}}</option>
  </select>
</template>
  
  <script setup>
  import { ref } from 'vue'

  import { useStorage } from "vue3-storage";


    const storage = useStorage();
    const selected =  ref('en') //storage.hasKey('locale')? storage.getStorageSync('locale'):ref('en')

    function setLocale(){
      console.log('lalal',selected)
      storage.setStorageSync("locale", selected.value);
    }

   

  </script>