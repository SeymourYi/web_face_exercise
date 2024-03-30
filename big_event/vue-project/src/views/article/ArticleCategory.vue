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
    console.log(categorys.value[0].createTime);
}
ArticleCategoryList();
const addCategory = async (category) => {
    let result = await ArticleCategoryAddService(category.value);
    ElMessage.success("成功")
    ArticleCategoryList();

}
</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>审核管理</span>
                <div class="extra">
                    <el-button type="primary" @click="addCategory">
                        添加分类
                    </el-button>
                </div>
            </div>
        </template>
        <el-table :data="categorys" style="width: 100%">
            <el-table-column prop="categoryAlias" label="姓名" />
            <el-table-column prop="categoryName" label="性别" />
            <el-table-column prop="createTime" label="学号" width="180" />
            <el-table-column prop="createUser" label="入学时间" width="180" />
            <el-table-column prop="updateTime" label="毕业时间" width="180" />
            <el-table-column prop="address" label="层次" width="180" />
            <el-table-column prop="address" label="出生日期" width="180" />
            <el-table-column prop="address" label="身份证号" width="180" />
            <el-table-column prop="address" label="专业" width="180" />
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