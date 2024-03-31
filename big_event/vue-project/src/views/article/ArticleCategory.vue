<script setup>
import {
    Edit,
    Delete
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const categorys = ref([

])
import { ArticleCategoryListService, ArticleCategoryOpertionDeletService, ArticleCategoryOpertionproveService, ArticleCategoryAddService } from '@/api/article.js'
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
const addCategory = async () => {
    // debugger
    let result = await ArticleCategoryAddService(categoryModel.value);
    ElMessage.success("添加成功")
    ArticleCategoryList();
    dialogVisible.value = false

}
//控制添加分类弹窗
const centerDialogVisibleEdit = ref(false)
const centerDialogVisibleDelet = ref(false)
const centerDialogVisiblex = () => {
    centerDialogVisible.value = true; title = ''

}
const title = ref('')
const changeData = ref({
    studentid: '',
})
const ClickEdit = (row) => {
    centerDialogVisibleEdit.value = true;
    title.value = '通过'
    changeData.value.studentid = row.studentid
}
const ClickEdittrue = async (row) => {

    await ArticleCategoryOpertionproveService(changeData.value)
    ElMessage.success('批准成功')
    centerDialogVisibleEdit.value = false;
}
const ClickDelet = (row) => {
    centerDialogVisibleDelet.value = true;
    title.value = '删除'
    changeData.value.studentid = row.studentid
}
const ClickDelettrue = async (row) => {
    await ArticleCategoryOpertionDeletService(changeData.value)
    ElMessage.success('删除成功')
    centerDialogVisibleDelet.value = false;
}

//添加分类数据模型

//添加分类表单校验
const rules = {
    studentid: [
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
                    <!-- <el-button type="primary" @click="dialogVisible = true">
                        手动添加
                    </el-button> -->
                </div>
            </div>
        </template>
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
            <el-table-column prop="isdelete" label="审核是否通过" width="180">
                <template #default="{ row }">
                    <el-button :icon="Edit" circle plain type="primary" @click=" ClickEdit(row)"></el-button>
                    <el-button :icon="Delete" circle plain type="danger" @click=" ClickDelet(row)"></el-button>
                </template>
            </el-table-column>
            <template #empty>
                <el-empty description="没有数据" />
            </template>
        </el-table>






        <!-- 添加分类弹窗 -->
        <!-- <el-dialog v-model="dialogVisible" title="添加弹层" width="30%">
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
                <el-form-item label="身份证号" prop="society_id">
                    <el-input v-model="categoryModel.society_id" minlength="1" maxlength="15"></el-input>
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
        </el-dialog> -->
        <el-dialog v-model="centerDialogVisibleEdit" :title='title' width="500" center>
            <span>
                您确定仔细审核了吗？审核通过后的信息将无法删除。
            </span>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="centerDialogVisibleEdit = false">取消</el-button>
                    <el-button type="success" @click="ClickEdittrue(row)">
                        确认通过
                    </el-button>
                </div>
            </template>
        </el-dialog>



        <el-dialog v-model="centerDialogVisibleDelet" title="删除此申请" width="500" center>
            <span>
                您确定此驳回操作吗？驳回后将删除此条。
            </span>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="centerDialogVisibleDelet = false">取消</el-button>
                    <el-button type="danger" @click="ClickDelettrue(row)">
                        确认删除
                    </el-button>
                </div>
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