<template>
  <div
    class="flex px-5 items-center  flex-row text-sm border border-solid rounded-md drop-shadow-lg bg-red-600  border-red-600 text-white p-2 m-2">
    <div class="flex-auto	" v-html="code_text"></div>
    <div class="flex-initial "><button type="button" class=" bg-white p-2 border rounded text-red-600">Copy
        code</button>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const code_text = 'Give 10% off </br>and get 10% commission</br> Your promo code: Johnlastname' //@todo - this needs to be an API call to gxa maybe.

const props = defineProps({
  style: String,
})
</script>