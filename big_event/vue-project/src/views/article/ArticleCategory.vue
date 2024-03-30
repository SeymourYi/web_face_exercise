<script setup>
import {
    Edit,
    Delete
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const categorys = ref([

])
import { ArticleCategoryListService, ArticleCategoryAddService } from '@/api/article.js'
import { ElMessage } from 'element-plus';
const ArticleCategoryList = async () => {
    let result = await ArticleCategoryListService();
    categorys.value = result.data;
}
ArticleCategoryList();
const categoryModel = ref({
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
const addCategory = async () => {
    // debugger
    let result = await ArticleCategoryAddService(categoryModel.value);
    ElMessage.success("添加成功")
    ArticleCategoryList();
    dialogVisible.value = false

}
//控制添加分类弹窗
const dialogVisible = ref(false)

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
                    <el-button type="primary" @click="dialogVisible = true">
                        手动添加
                    </el-button>
                </div>
            </div>
        </template>
        <el-table :data="categorys" style="width: 100%">
            <el-table-column prop="name" label="姓名" />
            <el-table-column prop="sex" label="性别" />
            <el-table-column prop="student_id" label="学号" width="180" />
            <el-table-column prop="createUser" label="入学时间" width="180" />
            <el-table-column prop="updateTime" label="毕业时间" width="180" />
            <el-table-column prop="level" label="层次" width="180" />
            <el-table-column prop="birthdate" label="出生日期" width="180" />
            <el-table-column prop="address" label="身份证号" width="180" />
            <el-table-column prop="major" label="专业" width="180" />
            <el-table-column prop="address" label="学制" width="180" />
            <!-- <el-table-column prop="address" label="学制" width="180" /> -->
            <!-- <el-table-column prop="address" label="身份证号" width="180" /> -->
            <el-table-column prop="address" label="审核是否通过" width="180">
                <template #default="{ row }">
                    <el-button :icon="Edit" circle plain type="primary"></el-button>
                    <el-button :icon="Delete" circle plain type="danger"></el-button>
                </template>
            </el-table-column>
            <template #empty>
                <el-empty description="没有数据" />
            </template>
        </el-table>






        <!-- 添加分类弹窗 -->
        <el-dialog v-model="dialogVisible" title="添加弹层" width="30%">
            <el-form :model="categoryModel" :rules="rules" label-width="100px" style="padding-right: 30px">
                <el-form-item label="学号" prop="student_id">
                    <el-input v-model="categoryModel.student_id" minlength="1" maxlength="10"></el-input>
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
                <el-form-item label="身份证号" prop="society_id">
                    <el-input v-model="categoryModel.society_id" minlength="1" maxlength="15"></el-input>
                </el-form-item>
                <el-form-item label="专业" prop="major">
                    <el-input v-model="categoryModel.major" minlength="1" maxlength="15"></el-input>
                </el-form-item>
                <el-form-item label="层次" prop="level">
                    <el-input v-model="categoryModel.level" minlength="1" maxlength="15"></el-input>
                </el-form-item>
                <el-form-item label="学制" prop="system_type">
                    <el-input v-model="categoryModel.system_type" minlength="1" maxlength="15"></el-input>
                </el-form-item>
                <el-form-item label="入学日期" prop="join_date">
                    <el-input v-model="categoryModel.join_date" minlength="1" maxlength="15"></el-input>
                </el-form-item>
                <el-form-item label="毕业日期" prop="end_date">
                    <el-input v-model="categoryModel.end_date" minlength="1" maxlength="15"></el-input>
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