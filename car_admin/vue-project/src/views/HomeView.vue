<script setup lang="ts">
import { useGetallStore } from "@/stores/getall";
import { ref, reactive, onBeforeMount } from "vue";
import axios, { type AxiosResponse } from "axios";
import { storeToRefs } from "pinia";
import { usestudentlist } from "@/stores/studentList";
const getstudentlist = usestudentlist()
function getall() {

  // getallstore.$patch({
  //   sum: 2222
  // })

  // getallstore.sum++
  // getallstore.sum1++
  // getallstore.sum2++
  // getallstore.sum3++

  getallstore.getalla()
  console.log("@@@@@@@@" + JSON.parse(JSON.stringify(getstudentlist)));


}
const getallstore = useGetallStore();

//监视state的变化
getallstore.$subscribe((mutate, state) => {
  console.log(11111123, mutate, state);
  localStorage.setItem("studentList", JSON.stringify(state))
})






function text() {
  console.log(response); // 未定义的变量，应该使用响应式对象
}

function arry() {
  textdata.value += 1;
}


let textdata = ref(16);
let response = reactive([{ 1: "1" }, { 2: "2" }]);
const { bigSum, lessSum, texaat, } = storeToRefs(getallstore)
</script>

<template>
  <main>
    <div>localstoredata: {{ getstudentlist }}</div>
    <div>搜索{{ getallstore.sum }},{{ }}</div>
    <div>搜索{{ getallstore.sum1 }}</div>
    <div>搜索{{ getallstore.sum2 }}</div>
    <div>搜索{{ getallstore.sum3 }}</div>
    <div>测试{{ textdata }}</div>

    <button @click.native="getall">搜索</button>
    <button @click.native="text">测试</button>

    <!-- <tr v-for="(article, index) in response">
      <td>{{ article }}</td>
      <td></td>
      <td>{{ article.category }}</td>
      <td>{{ article.time }}</td>
      <td>{{ article.state }}</td>
      <td>
        <button>编辑</button>
        <button>删除</button>
      </td>
    </tr> -->
  </main>
</template>
