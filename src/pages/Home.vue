<template lang="pug">
el-button(@click="count++") {{count}}
Message(
  title="titleabcdefg"
  @test="test"
)
  b hello component
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Message from '../components/Message.vue';
const count = ref(0);

function test($evnet){
  console.log('close', $evnet)
}
</script>