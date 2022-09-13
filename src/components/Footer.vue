<template>

  <footer v-show="route.name !== 'Login'" id="footer"
    class="sticky top-[100vh] mt-auto text-center bottom-0 w-full px-6 py-6 text-white bg-red-600">
    <div class="font-bold text-sm mb-3">{{$t('follow-us')}}</div>

    <div class="flex justify-center">
      <div class="grid grid-cols-4 gap-4 w-32">
        <a href="#">
          <vue-feather type="facebook"></vue-feather>
        </a>
        <a href="#">
          <vue-feather type="instagram"></vue-feather>
        </a>
        <a href="#">
          <vue-feather type="twitter"></vue-feather>
        </a>
        <a href="#">
          <TiktokSVG class="h-5 text-white fill-current mx-auto" />
        </a>
      </div>
    </div>

    <div class="flex text-xs my-4 underline decoration-auto">
      <a href="#" class="flex-auto">{{$t('terms-conditions')}} </a>
      <a href="#" class="flex-auto">{{$t('settings')}}</a>
      <a href="#" class="flex-auto">{{$t('sale')}}</a>
      <a href="#" class="flex-auto">{{$t('home')}}</a>
    </div>

    <div class="text-sm mb-3">2022 Goli® Nutrition Inc. {{$t('All Rights Reserved')}}.</div>

    <div class="mb-3 text-center border-solid rounded p-2 border text-xs">
      {{$t('footer_disclamer')}}
    </div>
    <LanguageSelect />
  </footer>
</template>

<script setup>
import LanguageSelect from "@/components/LanguageSelect.vue";
import TiktokSVG from "@/assets/tiktok.svg";
import { useRoute } from "vue-router";

const route = useRoute();
//console.log('route.params',route.name);
</script>
