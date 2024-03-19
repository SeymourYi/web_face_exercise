<script setup lang="ts" name="HuiFu">
import { id } from 'element-plus/es/locales.mjs';
import {reactive} from 'vue'
const newList = reactive([
  {id:'asdasd1',title:'很好的抗癌食物',content:'西蓝花'},
  {id:'asdasd2',title:'如何一夜暴富',content:'学IT'},
  {id:'asdasd3',title:'震惊，万万没想到',content:'明天是周一'},
  {id:'asdasd4',title:'食物',content:'蓝花'},
  {id:'asdasd5',title:'好消息',content:'快过年了'},
])
</script>

<template>

<div class="main_content">
 <ul>
  <li v-for="news in newList" :key="news.id">
    <span>{{ news.content }}</span>
  </li>
 </ul>
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