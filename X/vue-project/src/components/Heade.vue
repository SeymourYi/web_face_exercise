<script setup lang="ts" name="Header">

</script>

<template>
  <div class="header">
    <div class="w">
      <div class="user_pic"></div>
      <div class="logo"></div>
    </div>
  </div>
</template>

<style scoped>
.header{
  position: relative;
  height: 2.625rem;
  background-color: white;
  .w{
  position: absolute;
  top: .625rem;
  width: 100%;
  height: 1.525rem;
  background-color: plum;
  .user_pic{
    position: absolute;
    left: .3125rem;
    height: 1.525rem;
    width: 1.525rem;
    background-color: blue;
  }
  .logo{
    margin: 0 auto;
    height: 1.525rem;
    width: 1.525rem;
    background-color: blue;

  }
}
}
</style>