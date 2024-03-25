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
    <!-- 文章分类输入框 -->
    文章分类: <input type="text" v-model.trim="searchConditions.name">

    <!-- 搜索按钮 -->
    <button @click="search">搜索</button>

    <!-- 学生信息表格 -->
    <table border="1 solid" colspa="0" cellspacing="0">
      <tr>
        <th>学生姓名</th>
        <th>性别</th>
        <th>专业</th>
        <th>操作</th>
      </tr>
      <tr v-for="(student, index) in studentList" :key="index">
        <td>{{ student.name }}</td>
        <td>{{ student.sex }}</td>
        <td>{{ student.major }}</td>
        <td>
          <button>编辑</button>
          <button>删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<style></style>
