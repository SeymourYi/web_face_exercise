<script setup lang="ts">
import { useGetallStore } from "@/stores/getall";
import { ref, reactive, onBeforeMount, watch } from "vue";
import axios, { type AxiosResponse } from "axios";
import { storeToRefs } from "pinia";
import { usestudentlist } from "@/stores/studentList";
const getstudentlist = usestudentlist()


const getallstore = useGetallStore();

let textdata = ref(16);
let response = ref({ 1: 1 });
const { bigSum, lessSum, texaat, } = storeToRefs(getallstore)

onBeforeMount(() => {
  console.log(response.value[1]);

  // 在组件挂载到 DOM 之前执行的操作
  // getallstore.getalla()
  // console.log("@@@@@@@@" + JSON.parse(JSON.stringify(getstudentlist)));


});


async function getall() {
  await getallstore.getalla()
  console.log("123" + getallstore.list);

  // getallstore.$patch({
  //   sum: 2222
  // })

  // getallstore.sum++
  // getallstore.sum1++
  // getallstore.sum2++
  // getallstore.sum3++




}

//监视state的变化
getallstore.$subscribe((mutate, state) => {
  // console.log(11111123, mutate, state.list);

  // localStorage.setItem("studentList", JSON.stringify(getstudentlist))
})



async function change_rensponse() {
  // await Object.assign(response, { 2: "2" })  //这样就是添加
  console.log(textdata);
  textdata.value += 1
  // await Object.assign(textdata, { 1: "2" })  //这是修改
  console.log(textdata);
}

function change_response() {
  response.value[1] += 1
  // response.value = { 1: 3 }
  console.log(response.value[1]);

}

const stopwatch = watch(textdata, (newvalue, oldvalue) => {
  console.log("新的" + newvalue, "旧的" + oldvalue);

  if (newvalue >= 20) {
    stopwatch()  //销毁
  }



})
const stopwatch1 = watch(response, (newvalue, oldvalue) => {
  console.log("新的" + newvalue[1], "旧的" + oldvalue?.[1]);

  // if (newvalue >= 20) {
  //   stopwatch1()  //销毁
  // }



}, { deep: true, immediate: true })

function text() {
  console.log(response); // 未定义的变量，应该使用响应式对象
}

function arry() {
  textdata.value += 1;
}


</script>

<template>
  <main>
    <div>localstoredata: {{ getstudentlist }}</div>
    <div>搜索{{ getallstore.sum }},{{ }}</div>
    <div>搜索{{ getallstore.sum1 }}</div>
    <div>搜索{{ getallstore.sum2 }}</div>
    <div>搜索{{ getallstore.sum3 }}</div>
    <div>测试{{ textdata }}</div>

    <button @click.native="change_response">搜索</button>
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
