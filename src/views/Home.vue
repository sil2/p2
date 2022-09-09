<template>
  <div class="container">
    <header class="jumbotron">
      <Dropdown></Dropdown>
      <h3>{{ content }}</h3>
    </header>
  </div>

</template>

<script setup>
  import UserService from "@/services/user.service";
  import { ref, computed,onMounted } from 'vue'
  import Dropdown from "@/components/partials/Dropdown.vue";
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