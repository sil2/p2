<template>
  <select class="border-solid p-2 m-1 text-black bg-gray-200 border rounded-lg" @change="setLocale"
    v-model="$i18n.locale">
    <option :selected="[$i18n.locale==locale ? 'selected' : '']" v-for="locale in $i18n.availableLocales" :key="locale"
      :value="locale">{{$t(locale)}}</option>
  </select>
</template>

<script setup>
import { ref } from 'vue'
import { useStorage } from "vue3-storage";


const storage = useStorage();

const selected = storage.hasKey('locale') ? storage.getStorageSync('locale') : ref('en')

function setLocale() {
  console.log('LanguageSelect.vue (230972) selected', selected.value);
  storage.setStorageSync("locale", selected._value);
}

</script>