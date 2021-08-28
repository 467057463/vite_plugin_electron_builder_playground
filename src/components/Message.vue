<template lang='pug'>
.message(@click="emit('test', 'test')")
  slot
  span {{props.title}}
</template>

<script setup lang="ts">
// import { defineProps, defineEmits } from 'vue';
const props = defineProps(['title', 'content']);
const emit = defineEmits(['test']);


console.log(props)
console.log(emit)
</script>