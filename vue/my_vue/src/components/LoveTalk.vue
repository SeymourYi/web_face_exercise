

<template>
  <div class="talk">
<button @click="getLoveTalk">获取一句土味情话</button>
 <ul>
  <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
 </ul>
  </div>
</template>





<script setup lang="ts" name="LoveTalk">

import axios from "axios";
import { nanoid } from "nanoid";
import { reactive } from "vue";
import { useTalkStore } from "@/store/loveTalk";

const talkStore = useTalkStore()


let talkList=reactive([
  // {id:"afasf1",title:"今天你有点怪，哪里怪?怪好看的!"},
  // {id:"afasf2",title:"草莓，蓝莓 想我了没"},
  // {id:"afasf3",title:"心里给你留了一块地，我的死心塌地"},
])


async function getLoveTalk(){


let {data:{content:title}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json")
// console.log(result.data.content);
let obj = {
  id:nanoid(),title
}
console.log(obj)
}
</script>

<style scoped>

.talk{
  background-color: #efa626;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
 }
select,button{
  margin: 0 10px;
  height: 20px;
}
</style>