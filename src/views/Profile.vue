<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{user.data.email}}</strong> Profile
      </h3>
    </header>
  
  
   
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'

import { useUserStore } from '@/stores/user.store'
import UserService from '@/services/user.service'
import { reactive } from 'vue'

UserService.get()
const user = useUserStore()

console.log('profile user',user)
</script>
