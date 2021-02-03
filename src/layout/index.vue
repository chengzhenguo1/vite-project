<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <side-bar style="flex-basis:200px;"></side-bar>
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
import SideBar from './components/Sidebar/index.vue'
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
