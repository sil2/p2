<template>

    <div class="relative">
        <button @click="isOpen = !isOpen" class="flex border round items-center p-2 text-gray-600 rounded-md">
            selected option
        </button>
        <button v-if="isOpen" @click="isOpen = false" tabindex="-1"
            class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"></button>
        <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white">option 1</a>
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white">option 2</a>

        </div>
    </div>
</template>
  
  <script setup>
  
    let isOpen = false
          const handleEscape = (e) => {
              if (e.key === 'Esc' || e.key === 'Escape') {
                  isOpen = false
              }
          }
         // document.addEventListener('keydown', handleEscape)
         // this.$once('hook:beforeDestroy', () => {
         //     document.removeEventListener('keydown', handleEscape)
         // })
   
  </script>
  