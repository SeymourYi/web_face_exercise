<script setup lang="ts" name="UserNaviLine">
import NaviLine from '../home/NaviLine.vue';
import MainArea from '../home/MainArea.vue';
</script>

<template>
<!-- <div class="nav_line">
  <ul>
    <li class="back"><a href="#"></a></li>
    <li class="search"><a href="#"></a></li>
    <li class="setions"><a href="#"></a></li>
  </ul>
</div> -->
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
  <div class="user_sign">水岸东方，上善若水水岸东方，上善若水水岸东方，上善若水水岸东方，上善若水水岸东方，上善若水水岸东方，上善若水水岸东方，上善若水</div>
   <div class="more_user_informations">
     <ul>
      <li class="where">123</li>
      <li class="join_time">123</li>
     </ul>
  </div>

</div>
<!-- <NaviLine/> -->
<!-- <MainArea/> -->
</template>

<style scoped>
.bg_pic{
  img{
    height: 8.125rem;
    width: 100%;
  }
}
.edtiongs_line{
  position: relative;
  width: 100%;
  height: 65px;
  /* background-color: aqua; */
  border-bottom: 1px solid gray;
  .user_pic{
    position: absolute;
    top: -40px;
    float: left;
    margin-left: 20px;
    height: 90px;
   
  img{
    height: 90px;
    border-radius: 50px;
    border: 5px solid white;
  }
  }
  .edtions{
    margin-top: 10px;
     float: right;
     button{
      height: 40px;
      width: 100px;
      border: 1px solid gray;
      background-color: white;
      border-radius: 20px;
    }
  }
} 
.user_informations{
  border-bottom: 1px solid gray;
  h2{
    display: block;
    font-weight: 700;
    font-size: 28px;
    margin-left: 10px;
    text-align: left;
    width: 135px;
    height: 30px;
    /* background-color: aquamarine; */
  }
#user_id{
     margin-left: 10px;
     text-align: left;
     width: 135px;
     color: gray;
     
}
#user_id::before{
    content: "@";
     color: gray;
}

}
.more_user_informations{
  ul{
    display: flex;
  }
}
</style>