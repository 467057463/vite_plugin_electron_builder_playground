<template lang="pug">
el-button(
  type="primary"
  @click="increment"
) {{store.state.count}}
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
function increment(){
  store.commit('increment')
}
</script>