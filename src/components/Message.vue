<template lang='pug'>
.message(@click="emit('close', 'close_message')")
  .slot
    slot
  span {{props.title}}
  p {{props.content}}
</template>

<script setup lang="ts">

interface Props {
  title: string,
  content?: string

}
// import { defineProps, defineEmits } from 'vue';
const props = withDefaults(defineProps<Props>(), {
  content: 'message-content'
});

const emit = defineEmits<{
  (e: 'close', params: string): void
}>();


console.log(props)
console.log(emit)
</script>