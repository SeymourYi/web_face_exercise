<script setup lang="ts">
import Count from './components/Count.vue';
import LoveTalk from './components/LoveTalk.vue';
import Heade from './components/Heade.vue';
import NaviLine from './components/NaviLine.vue'
import MainArea from './components/MainArea.vue';
</script>

<template>


<div id="Heade">
  <Heade/>
</div>



<div>1</div>
<div>2</div>

<NaviLine/>

<div>1</div>
<MainArea/>
<div>1</div>

<Count/>
<LoveTalk/>
</template>

<style scoped>

#Heade{
  position: fixed;
  top: 0;
  width: 100%;
  height: 6.25rem;
}


</style>
