<template>
  <div class="nav-bar">
    <!-- 左侧面包屑 -->
    <div class="nav-left">
      <i class="el-icon-s-fold" @click="changeSideBar"></i>
      <breadcrumb></breadcrumb>
    </div>
    <!-- 右侧下拉 -->
    <div class="nav-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="../../assets/menu-icon.gif" alt="">
          <i class="el-icon-caret-bottom"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from './Breadcrumb.vue'
import { useStore } from 'vuex'

const store = useStore()

ref: changeSideBar = () => {
  store.commit('changeSideBar')
}
</script>

<style lang='scss' scoped>
@import "@styles/mixin.scss";

.nav-bar {
  @include flex-xb-yc;
  width: 100%;
  height: 50px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .nav-left {
    @include flex-yc;
    .el-icon-s-fold {
      @include flex-xc-yc;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }
  .nav-right {
    .el-dropdown-link {
      @include flex-yc;
      height: 100%;
      img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        cursor: pointer;
      }
      .el-icon-caret-bottom {
        padding: 0 5px;
        cursor: pointer;
        align-self: flex-end;
      }
    }
  }
}
</style>
