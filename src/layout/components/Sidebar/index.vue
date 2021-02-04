<template>
  <el-scrollbar :class="{'side-bar':!store.state.isCollapse}" wrap-class="scrollbar-wrapper">
    <el-menu :default-active="activeMenu" :collapse="store.state.isCollapse" :background-color="variables.menuBg" :text-color="variables.menuText" :unique-opened="false" :active-text-color="variables.menuActiveText" mode="vertical">
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" :isCollapse="store.state.isCollapse" />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue"
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useStore } from 'vuex'
import { routes } from "@router/index.js"
import variables from "@styles/global.module.scss"

/* 是否展开菜单 */
ref: store = useStore()

/* 匹配选中的路由 */
const route = useRoute()
ref: activeMenu = computed(() => {
  const { meta, path } = route
  /* 判断是否有显示的路由 */
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})

</script>

<style lang='scss'>
.side-bar {
  flex-basis: 210px;
}
</style>

