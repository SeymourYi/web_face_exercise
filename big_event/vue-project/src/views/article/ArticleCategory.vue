<script setup>
import {
    Edit,
    Delete
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const categorys = ref([
    {
        "id": 3,
        "categoryName": "美食",
        "categoryAlias": "my",
        "createTime": "2023-09-02 12:06:59",
        "updateTime": "2023-09-02 12:06:59"
    },
    {
        "id": 4,
        "categoryName": "娱乐",
        "categoryAlias": "yl",
        "createTime": "2023-09-02 12:08:16",
        "updateTime": "2023-09-02 12:08:16"
    },
    {
        "id": 5,
        "categoryName": "军事",
        "categoryAlias": "js",
        "createTime": "2023-09-02 12:08:33",
        "updateTime": "2023-09-02 12:08:33"
    }
])
import { ArticleCategoryListService } from '@/api/article.js'
const ArticleCategoryList = async () => {
    let result = await ArticleCategoryListService();
    categorys.value = result.data;
}
ArticleCategoryList();
</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>审核管理</span>
                <div class="extra">
                </div>
            </div>
        </template>
        <el-table :data="categorys" style="width: 100%">
            <el-table-column prop="date" label="姓名" />
            <el-table-column prop="name" label="性别" />
            <el-table-column prop="address" label="学号" width="180" />
            <el-table-column prop="address" label="入学时间" width="180" />
            <el-table-column prop="address" label="毕业时间" width="180" />
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