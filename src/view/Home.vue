<template>
  <div>
    {{$store.state.counter}}
    <button @click="$store.commit('addCounter')">add</button>
    <hello-world msg="helloworld"></hello-world>
  </div>
</template>

<script setup>
import HelloWorld from '@c/HelloWorld.vue'

</script>

<style>
</style>