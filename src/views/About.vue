<template>
  <div class="about">
    <h1>About {{name}}</h1>

    <div class="col-span-6 sm:col-span-3">
      <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
      <input v-model="newName" type="text" name="first-name" id="first-name" autocomplete="given-name" class=" border mb-4 pl-5 p-2 mt-1 block w-full rounded-md border-gray-300 
                  focus:outline-none focus:ring focus:ring-red-500
                 " />
    </div>


    <button @click="saveName" type="button"
      class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Submit</button>
  </div>
</template>


<script setup>
  import { computed,ref } from 'vue';
  import {useStore} from 'vuex'
  const store = useStore()

  const name = computed(()=>{
    return store.state.user.name
  })

  const newName = ref('')

  function saveName(){
    store.dispatch('saveName', newName.value)
    newName.value = ''
  }
</script>