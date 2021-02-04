<template>
  <div v-if="!item.hidden">
    <!-- 叶子节点 -->
    <template v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren)
      ">
      <router-link v-if="onlyOneChild.meta" :to="onlyOneChild.path">
        <el-menu-item :index="onlyOneChild.path">
          <item :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </router-link>
    </template>

    <!-- 不是叶子节点,递归生成子节点 -->
    <el-submenu v-else ref="subMenu" :index="item.path" popper-append-to-body>
      <template #title>
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item v-for="child in item.children" :key="child.path" :is-nest="true" :item="child" :base-path="child.path" class="nest-menu" />
    </el-submenu>
  </div>
</template>

<script setup>
import path from "path"
import Item from "./Item.vue"
import { defineProps, ref } from "vue"

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
  basePath: {
    type: String,
    default: "",
  }
})

ref: onlyOneChild = null

// 判断是否是叶子节点
ref: hasOneShowingChild = (children = [], parent) => {

  // 过滤当前有几个需要显示的子节点 
  const showingChildren = children.filter((item) => {
    if (item.hidden) {
      return false
    } else {
      /* 只有一个子路由的时候显示 */
      onlyOneChild = item
      return true
    }
  })

  // 判断过滤后的子节点,当只有一个子路由器时，默认显示该子路由器
  if (showingChildren.length === 1) {
    return true
  }

  // 如果没有子路由器显示，则显示当前节点
  if (showingChildren.length === 0) {
    onlyOneChild = { ...parent, path: props.item.path, noShowingChildren: true }
    return true
  }

  //不是叶子节点
  return false
}
</script>
