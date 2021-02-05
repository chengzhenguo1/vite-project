<template>
  <div>
    测试的vue
  </div>
</template>

<script setup>
import request from '@utils/request.js'

request.get('/getUser').then(res=>{
  console.log(res)
})

</script>

<style lang='scss' scoped>

</style>
