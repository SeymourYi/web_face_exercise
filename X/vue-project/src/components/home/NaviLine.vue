<script setup lang="ts" name="NaviLine">

</script>
<template>
<section>
  <ul class="NaviLines">
    <li class="activity"><a href="#">为你推荐</a></li>
    <li><a href="#">正在关注</a></li>
  </ul>
  <div class="gray_line"></div>
</section>
</template>



<style scoped>



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