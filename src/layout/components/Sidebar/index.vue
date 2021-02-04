<template>
  <el-scrollbar class="side-bar" wrap-class="scrollbar-wrapper">
    <el-menu :default-active="activeMenu" :background-color="variables.menuBg" :text-color="variables.menuText" :unique-opened="false" :active-text-color="variables.menuActiveText" mode="vertical">
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { routes } from "@router/index.js";
import variables from "@styles/global.module.scss";

/* 匹配正选中的路由 */
const activeMenu = computed(() => {
  const route = useRoute()
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
});
</script>

<style lang='scss' scoped>

.side-bar {
  flex-basis: 210px;
}
</style>

