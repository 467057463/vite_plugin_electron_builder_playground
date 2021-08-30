<template lang="pug">
el-button(@click="state.count++") {{state.count}}
Message(
  title="titleabcdefg"
  @close="close"
)
  b hello component
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Message from '../components/Message.vue';
const count = ref(0);

function close($evnet: string){
  console.log('close', $evnet)
}

const state = reactive({
  count: 0
})
console.log(state)
</script>