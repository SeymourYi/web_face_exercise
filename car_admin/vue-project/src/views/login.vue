<script lang="ts" setup>


import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}

</script>

<template>



  <el-card style="max-width: 1080px">
    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      style="width: 100%" />
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="passowrd">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>找回密码</el-button>
      </el-form-item>
    </el-form>
  </el-card>



</template>

<style></style>
