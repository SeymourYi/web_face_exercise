

<template>
  <div class="app"></div>
  <count/><br>
  <LoveTalk/>

</template>

<style scoped>

</style>

<script setup lang="ts" name="App">

import count from "./components/Count.vue"
import LoveTalk from "./components/LoveTalk.vue"

</script>

<!-- 钩子函数  -->
<!-- setup的生命周期早于data，methods,前者不可用this 后者可以使用 -->
<!-- mvvm模型 -->
<!-- reactive响应式对象，无论数据包裹多深，都能响应 -->import type { count } from 'console';
import type { count } from "console";

