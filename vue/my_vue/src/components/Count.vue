

<template>
  
  <div class="count">
    
    <h2>荡千秋何为{{ sum }}</h2>
   <select v-model.number="n">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>





<script  lang="ts" setup name = "Count">
import { ref,reactive } from "vue";
import { userCountStore } from "@/store/count";
const countStore = userCountStore()
console.log("@",countStore);

let sum =ref(1)  
let n =ref(1)  //用户选择的数据
let obj = reactive({
  a:1
})

function add(){
  // sum.value += n.value
}
function minus(){
  // sum.value -= n.value
}

</script> 

<style>
 .count{
  background-color: aqua;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
 }
select,button{
  margin: 0 10px;
  height: 20px;
}
 
</style>
