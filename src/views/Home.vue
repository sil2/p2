<template>
   <h1 class="text-3xl font-bold underline">
    {{$t('hello')}} {{name}}
  </h1>

  
</template>

<script setup>
  import { computed } from 'vue';
  import {useStore} from 'vuex'
  const store = useStore()
  const name = computed(()=>{
    return store.state.user.name
  })
</script>