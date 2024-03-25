<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { getStudentListSservice, getStudentSearchSservice } from '@/api/getStudentList.ts'
// 定义响应式变量

const studentList = ref([]);
const searchConditions = ref({ name: '' });
// 获取所有学生信息

async function getall() {
  let data = await getStudentListSservice()
  // console.log(data);

  studentList.value = data;
  // console.log(studentList.value);
}
getall()
const search = async function () {

  let data = await getStudentSearchSservice({ ...searchConditions.value })
  const a = ref([])
  a.value.push(data) //这个报错别改 改了程序就失去功能
  studentList.value = a.value;
}

// 搜索学生信息

</script>

<template>
  <div id="app">

    名字搜索: <input type="text" v-model="searchConditions.name">

    发布状态: <input type="text" v-model="searchConditions.state">

    <button v-on:click="search">搜索</button>

    <br />
    <br />
    <table border="1 solid" colspa="0" cellspacing="0">
      <tr>
        <th>文章标题</th>
        <th>分类</th>
        <th>发表时间</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      <tr v-for="(article, index) in studentList">
        <td>{{ article.name }}</td>
        <td>{{ article.sex }}</td>
        <td>{{ article.major }}</td>
        <td>{{ article.level }}</td>
        <td>
          <button>编辑</button>
          <button>删除</button>
        </td>
      </tr>
      <!-- <tr>
        <td>标题2</td>
        <td>分类2</td>
        <td>2000-01-01</td>
        <td>已发布</td>
        <td>
            <button>编辑</button>
            <button>删除</button>
        </td>
    </tr>
    <tr>
        <td>标题3</td>
        <td>分类3</td>
        <td>2000-01-01</td>
        <td>已发布</td>
        <td>
            <button>编辑</button>
            <button>删除</button>
        </td>
    </tr> -->
    </table>
  </div>
</template>

<style></style>
