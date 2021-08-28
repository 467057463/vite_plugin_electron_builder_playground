<template lang="pug">
el-button(@click="count++") {{count}}
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);

</script>