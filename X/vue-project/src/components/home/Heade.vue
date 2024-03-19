<script setup lang="ts" name="Header">
import { RouterView,RouterLink } from "vue-router";
</script>

<template>
  <div class="header">
    <div class="w">
     <ul>
      <li><RouterLink to="/usernaviLine/tiezi"><img src="./avatar.svg" alt=""></RouterLink></li>
      <li><RouterLink to="/HomePage/mainarea"><img src="./home.svg" alt=""></RouterLink></li>
     </ul>
    </div>
  </div>
</template>

<style scoped>
.header{
  position: fixed;
  bottom: 0px;
  height: 50px;
  width: 100%;
  background-color: white;
  .w{
  margin-top: 10px;
  width: 100%;
  height: 1.525rem;
  /* background-color: plum; */
  flex-direction: row;
  ul{
    display: flex;
    justify-content: space-around;
  }
  ul li{
    float: left;
    /* margin: 10px; */
    width: 20px;
    line-height: 1.525rem; 
    margin-top: 3px;
    height: 20px;
    /* background-color: rgb(147, 29, 39); */
    /* justify-content: space-around; */
  }
}

}
</style>