<script setup lang="ts">
import Count from './components/home/Count.vue';
import LoveTalk from './components/home/LoveTalk.vue';
import Heade from './components/home/Heade.vue';
import NaviLine from './components/home/NaviLine.vue'
import MainArea from './components/home/MainArea.vue';
import UserNaviLine from './components/user_home/UserNaviLine.vue';
</script>

<template>

<div class="home">

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


</div>
<div class="user_home">

<UserNaviLine/>



</div>
</template>

<style scoped>

#Heade{
  position: fixed;
  top: 0;
  width: 100%;
  height: 6.25rem;
}
.home{
  display: none;
}
.user_home{
  /* display: none; */

}

</style>./components/user_home/UserNaviLine.vue
