<script setup lang="ts" name="App">
import Count from './components/home/Count.vue';
import LoveTalk from './components/home/LoveTalk.vue';
import NaviLine from './components/home/NaviLine.vue'
import MainArea from './components/home/MainArea.vue';
import UserNaviLine from './components/user_home/UserNaviLine.vue';
import Header from './components/home/Heade.vue'
import { RouterView,RouterLink } from "vue-router";

</script>

<template>


<RouterView/>

<div class="botom_bar">
  <Header/>
</div>

</template>

<style scoped>

#Heade{
  position: fixed;
  top: 0;
  width: 100%;
  height: 1.25rem;
}
.home{
  /* display: none; */
}
.user_home{
  display: none;

}
.botom_bar{
  /* margin-top: 20px; */
}


.NaviLines{
display: flex;
padding-left: 0;
line-height:2.25;
border-bottom: 1px solid gray;

li{
  height: 2.25rem;
  margin: 0 10px;
  a{
    text-align: center;
   
  }
}
}
.activity{

border-bottom: 2px solid pink;

a{
  font-weight: 600;
}
}

</style>
