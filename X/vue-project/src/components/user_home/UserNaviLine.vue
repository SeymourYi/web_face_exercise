<script setup lang="ts" name="NaviLine">
import NaviLine from '../home/NaviLine.vue';
import MainArea from '../home/MainArea.vue';
</script>

<template>
<div class="nav_line">
  <ul>
    <li class="back"><a href="#"></a></li>
    <li class="search"><a href="#"></a></li>
    <li class="setions"><a href="#"></a></li>
  </ul>
</div>
<div class="bg_pic">
  <img src="./b.png" alt="">
</div>
<div class="edtiongs_line">
  <div class="user_pic">
    <img src="./c.png" alt="">
  </div>
  <div class="edtions">
    <button>编辑个人资料</button>
  </div>
</div>
<div class="user_informations">
  <h2>istar</h2>
  <div id="user_id">123</div>
  <div class="user_sign">水岸东方，上善若水</div>
</div>
<NaviLine/>
<MainArea/>
</template>

<style scoped>
.nav_line{
  position: relative;
  position: fixed;
  display: flex;
  background-color: transparent;
  height: 3.25rem;
  width: 100%;
  ul{
    margin-top: 10px;
    padding-left: 0;
    width: 100%;
  }
  .search{
    background-color: blue;
    width: 3.25rem;
    float: right;
  }
  .setions{
    background-color: rgba(210, 220, 14, 0.874);
    width: 3.25rem;
    float: right;
  }
  .back{
    background-color: aqua;
    width: 3.25rem;
    float: left;
  }
}
.bg_pic{
  img{
    width: 100%;
    height: 10.75rem;
  }
}
.edtiongs_line{
  .user_pic{
  img{
    position: absolute;
    top: 130px;
    left: 20px;
    width: 4.25rem;
    border-radius: 30px;
  }
}
  .edtions {
    float: right;
    button{
          margin-left: 100px;
    }
  }
}

</style>