<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { ArticleCategoryundataService } from '@/api/article.js'
const router = useRouter()
//控制注册与登录表单的显示， 默认显示注册
// const isRegister = ref(false)
const changeData = ref({
  old_Pwd: '',
  new_Pwd: ''
})


const rules = {
  old_Pwd: [
    { required: true, message: '请输入原密码', trigger: 'blur' },
    { min: 6, max: 16, message: '长度为6-16位非空字符', trigger: 'blur' }
  ],
  new_Pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, max: 16, message: '长度为6-16位非空字符 ', trigger: 'blur' }
  ]
}

const changePwd = async () => {
  await ArticleCategoryundataService(changeData.value)

  // if (result.code == 0) {
  //   alert(
  //     result.msg ? result.msg : "注册成功")
  // } else {
  //   alert("注册失败")
  // }

  ElMessage.success(result.data.message ? result.data.message : "操作成功")
  router.push('/login')
  // alert(result.data.message ? result.data.message : "登录成功")
}


</script>

<template>
  <el-row class="login-page">
    <!-- <el-col :span="12" class="bg"></el-col> -->
    <el-col :span="6" :offset="8" class="form">
      <el-form ref="form" size="large" autocomplete="off" :model="changeData" :rules="rules">
        <el-form-item>
          <h1>管理员密码修改</h1>
        </el-form-item>

        <el-form-item prop="old_Pwd">
          <el-input name="password" :prefix-icon="Lock" type="password" placeholder="请输当前入密码"
            v-model="changeData.old_Pwd"></el-input>
        </el-form-item>
        <el-form-item prop="new_Pwd">
          <el-input name="password" :prefix-icon="Lock" type="password" placeholder="请输新的入密码"
            v-model="changeData.new_Pwd"></el-input>
        </el-form-item>

        <el-form-item class="flex">

        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button class="button" type="primary" auto-insert-space @click="changePwd">修改密码</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
/* 样式 */
.login-page {
  height: 100vh;
  background-color: #fff;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      margin: 0 auto;
    }

    .button {
      width: 100%;
    }

    .flex {
      width: 100%;
      display: flex;
      // justify-content: space-between;
    }
  }
}
</style>