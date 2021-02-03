<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <div style="flex-basis:200px;">Aside</div>
    <!-- 右侧内容区 -->
    <div class="container">
      <nav-bar></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import AppMain from './components/AppMain.vue'
</script>

<style lang='scss' scoped>
.app-wrapper {
  display: flex;
  width: 100vw;
  height: 100vh;
  .container {
    flex: 1;
  }
}
</style>
