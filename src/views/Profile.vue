<template>
  <div class=" flex-grow border border-solid rounded-lg drop-shadow-lg bg-white  border-white text-black p-2 m-2">

    <strong>{{user.data.email}}</strong>

    <div class="tet-xm text-gray-400">
      <pre>{{user.data}}</pre>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'

import { useUserStore } from '@/stores/user.store'
import UserService from '@/services/user.service'
import { reactive } from 'vue'

UserService.get()
const user = useUserStore()

console.log('profile user', user)
</script>
