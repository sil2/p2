<template>

  <GetCode></GetCode>

  <div class=" flex-grow border border-solid rounded-lg drop-shadow-lg bg-white  border-white text-black p-2 m-2">
    <div class="text-xl mb-4 text-center">
      {{$t('welcome-to')}} GOLI PARTNERS!
    </div>
    <div clsss="text-sm text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>

    <div><img src="@/assets/dash.png" /></div>
  </div>
</template>

<script setup>
import UserService from "@/services/user.service";
import { ref, computed, onMounted } from 'vue'
import GetCode from "@/components/partials/GetCode.vue";
import { useUserStore } from '@/stores/user.store'

UserService.get()
const user = useUserStore()


//const store = useStore()
let content = ref()

const name = computed(() => {
  // return store.state.user.name
})
/*
  onMounted(() => {

    UserService.getPublicContent().then((response) => {
      content = response.data;
    }, (error) => {
      content =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
    })
  })
*/


</script>