<template lang='pug'>
.message(@click="emit('close', 'close_message')")
  .slot
    slot
  span {{props.title}}
  p(@click="changeCount(10)") {{props.content}}
  p {{ count }}
  p {{ countTow}}
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
// @ts-ignore
import composables from './composables.js';

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

console.log(this)
console.log(props)
console.log(emit)

onMounted(() => {
  console.log('ssss')
})

const { count, countTow, changeCount } = composables()
</script>