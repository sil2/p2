<template>

  <footer v-show="route.name!=='Login'" id="footer" class="sticky top-[100vh] mt-auto
 text-center  bottom-0 w-full px-6 py-6 text-white bg-red-600">
    <div class=" font-bold	 text-sm mb-3">Follow us</div>
    <div>
      <ul class="
          mt-8

          flex flex-row space-y-0 flex-row items-center space-x-5">
        <li><a href="#">
            <vue-feather type="facebook"></vue-feather>
          </a></li>
        <li><a href="#">
            <vue-feather type="instagram"></vue-feather>
          </a></li>
        <li><a href="#">
            <vue-feather type="twitter"></vue-feather>
          </a></li>

      </ul>

    </div>
    <div class=" text-sm mb-3">2022 Goli® Nutrition Inc. All Rights Reserved.</div>

    <div class="mb-3 text-center	border-solid	rounded p-2 border text-xs">DISCLAIMER: These statements have not been
      evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent
      any disease. The views and nutritional advice expressed by Goli Nutrition Inc. are not intended for the purpose of
      providing medical advice. Please always consult your health care provider if you are taking any medication, are or
      may be pregnant, or have any medical condition. Individual results may vary.</div>
    <LanguageSelect />


  </footer>

</template>

<script setup>

import LanguageSelect from "@/components/LanguageSelect.vue";
import { useRoute } from 'vue-router'

const route = useRoute();
//console.log('route.params',route.name);
</script>