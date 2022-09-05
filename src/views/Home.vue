<template>
  <div class="container">
    <header class="jumbotron">
      <Dropdown></Dropdown>
      <h3>{{ content }}</h3>
    </header>
  </div>
  
</template>

<script>
import UserService from "@/services/user.service";
export default {
    name: "Home",
    data() {
        return {
            content: "",
        };
    },
    mounted() {
        UserService.getPublicContent().then((response) => {
            this.content = response.data;
        }, (error) => {
            this.content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
        });
    },
    components: { Dropdown }
};

  import { computed } from 'vue';
  import {useStore} from 'vuex';

  import Dropdown from "@/components/partials/Dropdown.vue";


  const store = useStore()
  const name = computed(()=>{
    return store.state.user.name
  })
</script>