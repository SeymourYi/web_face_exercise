<script setup lang="ts" name="HomePage">
import Count from './Count.vue';
import LoveTalk from './LoveTalk.vue';
import NaviLine from './NaviLine.vue'
import MainArea from './MainArea.vue';
import UserNaviLine from '../user_home/UserNaviLine.vue';
import Heade from '../home/Heade.vue';
import Logo from '../home/Logo.vue';
import { RouterView,RouterLink } from "vue-router";

</script>

<template>
  <Logo/>
<div class="home">
  <section>
  <ul class="NaviLines">
    <li ><RouterLink active-class="activity" to="HomePage/mainarea">为你推荐</RouterLink></li>
    <li ><RouterLink active-class="activity" to="HomePage/folwingarea">正在关注</RouterLink></li>
  </ul>
  <div class="gray_line"></div>
</section>
<!-- <MainArea/> -->
<!-- 展示区 -->
<div class="RouterView">
  <RouterView/>  
</div>

</div>
<div class="user_home">
<UserNaviLine/>
</div>
</template>

<style scoped>
.NaviLines{
  position: absolute;
  top: 60px;
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



#Heade{
  position: fixed;
  top: 0;
  width: 100%;
  height: 1.25rem;
}
.home{
  position: relative;
  /* display: none; */
}
.user_home{
  display: none;

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
.RouterView{
position: absolute;
top: 100px;
}
</style>
