<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

import { ref } from 'vue'

const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(2)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(5)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const total = ref(30)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: null,
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}


</script>

<template>


  <el-card style="max-width: 480px">
    <div class="card-header">
      <span>信息管理</span>
      <el-button type="primary">导入毕业生信息</el-button>
    </div>








    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="Activity zone">
        <el-select v-model="formInline.region" placeholder="Activity zone" clearable>
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="default" @click="onSubmit">重置</el-button>

      </el-form-item>


    </el-form>


    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="姓名" />
      <el-table-column prop="name" label="性别" />
      <el-table-column prop="address" label="学号" width="180" />
      <el-table-column prop="address" label="入学时间" width="180" />
      <el-table-column prop="address" label="毕业时间" width="180" />
      <el-table-column prop="address" label="层次" width="180" />
      <!-- <el-table-column prop="address" label="学制" width="180" /> -->
      <!-- <el-table-column prop="address" label="身份证号" width="180" /> -->
      <el-table-column prop="address" label="审核是否通过" width="180">
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="danger" :icon="Delete" circle />
      </el-table-column>
    </el-table>
    <el-pagination class="el-p" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
      :page-sizes="[5, 10, 15, 20]" :small="small" :disabled="disabled" :background="background"
      layout="jumper,total, sizes, prev, pager, next" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />





  </el-card>


</template>
<style scoped>
.el-p {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.card-header {
  display: flex;
  justify-content: space-around;
}
</style>