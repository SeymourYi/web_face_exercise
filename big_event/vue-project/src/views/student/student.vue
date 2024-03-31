<!-- <script lang="ts" setup>

import { reactive, ref } from 'vue'

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

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

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
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
import { onMounted } from 'vue';
import { ArticleCategoryListService, ArticleCategoryAddService } from '@/api/article.js'


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


const formInline = reactive({
  user: '',
  region: null,
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
const searchData = ref({
  name: ''
})
const centerDialogVisible = ref(false)
const verify = () => {

}
const ArticleCategoryList = async () => {
  let result = await ArticleCategoryListService();
  tableData.value = result.data;
}
ArticleCategoryList();
const tableData = ref({
  student_id: '',
  name: '',
  sex: '',
  birthdate: '',
  society_id: '',
  major: '',
  level: '',
  system_type: '',
  join_date: '',
  end_date: '',
  Certification: 0,
  isdelete: 0
})
</script>

<template>




  <el-card>
    <div class="card-header">
      <span>信息管理</span>
      <div class="extra">
        <el-button type="primary" @click="centerDialogVisible = true">
          导入毕业生信息
        </el-button>

        <el-dialog v-model="centerDialogVisible" title="警告" width="500" center>
          <span>
            所导入信息要严格符合此格式
            <a
              href="https://bigevent24563.oss-cn-beijing.aliyuncs.com/%E6%95%B0%E6%8D%AE%E6%A8%A1%E6%9D%BF.xlsx">点击下载模板</a>
          </span>
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取消</el-button>
              <el-button type="primary" @click="centerDialogVisible = false, verify">
                确认
              </el-button>
            </div>
          </template>
        </el-dialog>
      </div>
    </div>



    <div class="line">

    </div>




    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="姓名:">
        <el-input placeholder="请输入完整姓名" v-model="searchData.name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="default" @click="onSubmit">重置</el-button>

      </el-form-item>


    </el-form>


    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="student_id" label="学号" width="180" />
      <el-table-column prop="address" label="入学时间" width="180" />
      <el-table-column prop="address" label="毕业时间" width="180" />
      <el-table-column prop="address" label="层次" width="180" />
      <el-table-column prop="address" label="出生日期" width="180" />
      <el-table-column prop="address" label="身份证号" width="180" />
      <el-table-column prop="address" label="专业" width="180" />
      <el-table-column prop="address" label="学制" width="180" />
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
  justify-content: space-between;
}

.line {
  display: block;
  height: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid gray;
}
</style> -->


<script setup>
import {
  Edit,
  Delete
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const categorys = ref([

])
import { ArticleCategoryListService, getStudentSearchSservice, ArticleCategoryAddService } from '@/api/article.js'
import { ElMessage } from 'element-plus';
const ArticleCategoryList = async () => {
  let result = await ArticleCategoryListService();
  categorys.value = result.data;
}
ArticleCategoryList();
const categoryModel = ref({
  studentid: '',
  name: '',
  sex: '',
  birthdate: '',
  societyid: '',
  major: '',
  level: '',
  systemtype: '',
  joindate: '',
  enddate: '',
  Certification: 0,
  isdelete: 0
})
const aftersearchData = ref({

})

const searchData = ref({
  name: ''
})
const addCategory = async () => {
  // debugger
  let result = await ArticleCategoryAddService(categoryModel.value);
  console.log(result);
}
const noSubmit = async () => {
  let result = await ArticleCategoryListService();
  categorys.value = result.data;
}
const onSubmit = async () => {
  debugger
  let result = await getStudentSearchSservice(searchData.value);
  let a = []
  a.push(result.data)
  categorys.value = a;

}
//控制添加分类弹窗
const dialogVisible = ref(false)
const centerDialogVisible = ref(false)

//添加分类数据模型

//添加分类表单校验
const rules = {
  student_id: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
  ],
  name: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
  ]
}
</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>审核管理</span>
        <div class="extra">
          <el-button type="primary" @click="centerDialogVisible = true">
            导入毕业生信息
          </el-button>

          <el-dialog v-model="centerDialogVisible" title="警告" width="500" center>
            <span>
              所导入信息要严格符合此格式
              <a
                href="https://bigevent24563.oss-cn-beijing.aliyuncs.com/%E6%95%B0%E6%8D%AE%E6%A8%A1%E6%9D%BF.xlsx">点击下载模板</a>
            </span>
            <template #footer>
              <div class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false, verify">
                  确认
                </el-button>
              </div>
            </template>
          </el-dialog>
        </div>
      </div>
    </template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="姓名:">
        <el-input placeholder="请输入完整姓名" v-model="searchData.name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="default" @click="noSubmit">重置</el-button>

      </el-form-item>
    </el-form>
    <el-table :data="categorys" style="width: 100%">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="studentid" label="学号" width="180" />
      <el-table-column prop="joindate" label="入学时间" width="180" />
      <el-table-column prop="enddate" label="毕业时间" width="180" />
      <el-table-column prop="level" label="层次" width="180" />
      <el-table-column prop="birthdate" label="出生日期" width="180" />
      <el-table-column prop="societyid" label="身份证号" width="180" />
      <el-table-column prop="major" label="专业" width="180" />
      <el-table-column prop="systemtype" label="学制" width="180" />
      <!-- <el-table-column prop="address" label="学制" width="180" /> -->
      <!-- <el-table-column prop="address" label="身份证号" width="180" /> -->
      <!-- <el-table-column prop="address" label="审核是否通过" width="180">
        <template #default="{ row }">
          <el-button :icon="Edit" circle plain type="primary" @click="dialogVisible = true"></el-button>
          <el-button :icon="Delete" circle plain type="danger"></el-button>
        </template>
      </el-table-column> -->
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>






    <!-- 添加分类弹窗 -->
    <el-dialog v-model="dialogVisible" title="添加弹层" width="30%">
      <el-form :model="categoryModel" :rules="rules" label-width="100px" style="padding-right: 30px">
        <el-form-item label="学号" prop="studentid">
          <el-input v-model="categoryModel.studentid" minlength="1" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="categoryModel.name" minlength="1" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="categoryModel.sex" minlength="1" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthdate">
          <el-input v-model="categoryModel.birthdate" minlength="1" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="societyid">
          <el-input v-model="categoryModel.societyid" minlength="1" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-input v-model="categoryModel.major" minlength="1" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="层次" prop="level">
          <el-input v-model="categoryModel.level" minlength="1" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="学制" prop="systemtype">
          <el-input v-model="categoryModel.systemtype" minlength="1" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="入学日期" prop="joindate">
          <el-input v-model="categoryModel.joindate" minlength="1" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="毕业日期" prop="enddate">
          <el-input v-model="categoryModel.enddate" minlength="1" maxlength="15"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addCategory"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>


  </el-card>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

}
</style>