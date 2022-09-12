<template>
    <div class="text-sm border border-solid rounded-md drop-shadow-lg bg-red-400  border-red-400 text-white p-5 m-2">
        123123
    </div>
</template>

<script setup>

import { toRef } from 'vue'
const props = defineProps({
    message: String
})
const message = toRef(props, 'message')


</script>