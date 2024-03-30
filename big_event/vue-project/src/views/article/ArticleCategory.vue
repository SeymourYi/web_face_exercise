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
    categoryName: '',
    categoryAlias: ''
})
const addCategory = async () => {
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
    categoryName: [
        { required: true, message: '请输入分类名称', trigger: 'blur' },
    ],
    categoryAlias: [
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
                        添加分类
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
                <el-form-item label="分类名称" prop="categoryName">
                    <el-input v-model="categoryModel.categoryName" minlength="1" maxlength="10"></el-input>
                </el-form-item>
                <el-form-item label="分类别名" prop="categoryAlias">
                    <el-input v-model="categoryModel.categoryAlias" minlength="1" maxlength="15"></el-input>
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