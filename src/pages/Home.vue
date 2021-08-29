<template lang="pug">
el-button(@click="count++") {{count}}
Message(
  title="titleabcdefg"
  @close="close"
)
  b hello component
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Message from '../components/Message.vue';
const count = ref(0);

function close($evnet: string){
  console.log('close', $evnet)
}
</script>