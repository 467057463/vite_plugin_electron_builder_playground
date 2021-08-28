<template lang="pug">
el-row
  el-col(:span="24")
    router-link(to="/") 首页
    router-link(to="/about") 关于我们
router-view
</template>

<script setup lang="ts">
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
  width: 100vw;
  
}
webview{
  width: 100vw;
  height: 100vh;
}
</style>
