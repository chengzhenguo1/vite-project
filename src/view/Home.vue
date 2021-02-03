<template>
  <div>
    {{$store.state.counter}}
    <button @click="$store.commit('addCounter')">add</button>
    <hello-world msg="helloworld"></hello-world>
    <el-button>默认按钮</el-button>
    <el-input  placeholder="请输入内容"></el-input>
  </div>
</template>

<script setup>
import HelloWorld from '@c/HelloWorld.vue'

</script>

<style>
</style>