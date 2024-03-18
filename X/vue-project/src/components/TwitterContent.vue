<script setup lang="ts" name="TwitterContent">
</script>

<template>
<div class="main_content">
<div class="user_pic">1</div>
<div class="content">
  <div class="user_name_line">iStar</div>
  <div class="user_text">一到周末就下雨，只好去桥底跑一下。最近心率控制还可以了</div>
  <div class="user_upload_pic">
    <img src="../images/Snipaste_2024-03-18_20-19-45.png" alt="">
  </div>
  <div class="user_options">1</div>
</div>
</div>
</template>

<style scoped>
/* @Content_hight 20px; */
.main_content{
  display: flex;
  border-top: 1px solid gray;
  border-bottom: 1px solid rgb(216, 21, 21);
  .user_pic{
   height: 30.25rem;
   width: 3.125rem;
   background-color: rgb(193, 67, 67); 
  }
  .content{
    .user_upload_pic{
        img{
          height: 12.5rem;
          border-radius: 20px;
          border: 1px solid gray;
        }
    }
    .user_options{
      background-color:darkmagenta;
      height: 3.125rem;
    }
  }
}

</style>