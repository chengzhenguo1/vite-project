<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <!-- 当前页面 -->
        <span v-if="item.redirect === 'noRedirect' || index == levelList.length - 1" class="no-redirect">{{ item.meta.title }}</span>
        <!-- 前面的路径 -->
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

ref: route = useRoute()
ref: router = useRouter()

ref: levelList = null
// 动态生成面包屑
const getBreadcrumb = () => {
  // 判断有没有meta属性
  let matched = route.matched.filter((item) => item.meta && item.meta.title)
  // 判断第一个标签是不是首页,不是的话添加进去
  const first = matched[0]
  if (first.path !== "/") {
    matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched)
  }
  // 最后过滤 没有breadcrumb属性
  levelList = matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  );
}

// 跳转页面
ref: handleLink = (item) => {
  const { redirect, path } = item
  if (redirect) {
    router.push(redirect)
    return;
  }
  router.push(path)
}


getBreadcrumb()
watch(route, getBreadcrumb)

</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
