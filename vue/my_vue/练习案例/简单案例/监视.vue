<script  lang="ts" setup name = "person_123">
import { reactive,ref, watch  } from 'vue';
let sum=reactive(
  {name:"张三",
  age:10,
  car:{
    c1:"雅迪",
    c2:"爱玛"
  }}
  )
function changeSum() {
  //  console.log(sum);
  sum.age+=1
}

watch(
  ()=>
    sum.age
  ,(newvalue,oldvalue)=>{
  console.log("123",newvalue,oldvalue);
},{deep:true})
</script>

<template>
  <div class="add">名字为：{{ sum.name }}</div>  <br>
  <div class="add">年龄据为：{{ sum.age }}</div><br>
  <div class="add">ci数据为：{{ sum.car.c1 }}</div>
  <div class="add">c2的数据为：{{ sum.car.c2 }}</div>
   <button @click="changeSum">点击增加</button>
</template>

<style scoped>

</style>
