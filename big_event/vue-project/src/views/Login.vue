<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useTokenStore } from '@/stores/token.js'
const router = useRouter()
const tokenStore = useTokenStore()
//控制注册与登录表单的显示， 默认显示注册
// const isRegister = ref(false)
let adminData = ref({
  username: '',
  password: '',
  // repasswod: ''
})

const checkRePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value != adminData.value.password) {
    callback(new Error('两次密码不一致'))
  } else {
    callback()
  }
}

const rules = {
  username: [
    { required: true, message: '请输入管理员名', trigger: 'blur' },
    { min: 1, max: 16, message: '长度为1-16位非空字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 1, max: 16, message: '长度为1-16位非空字符 ', trigger: 'blur' }
  ],
  repasswod: [
    { validator: checkRePassword, trigger: 'blur' }
  ]
}
import { userRegisterservice, adminLoginService } from '@/api/admin.js'

const register = async () => {
  let result = await userRegisterservice(adminData.value)

  // if (result.code == 0) {
  //   alert(
  //     result.msg ? result.msg : "注册成功")
  // } else {
  //   alert("注册失败")
  // }

  ElMessage.success(result.data.message ? result.data.message : "登录成功")
  // alert(result.data.message ? result.data.message : "登录成功")
}

const login = async () => {
  let result = await adminLoginService(adminData.value);

  tokenStore.setToken(result.data)
  // if (result.code == 0) {
  //   alert(result.msg ? result.msg : "登录成功")
  // } else {
  //   alert(result.message ? result.message : "登录失败")
  // }
  ElMessage.success(result.data.message ? result.data.message : "登录成功")
  router.push('/')
  // alert(result.data.message ? result.data.message : "登录成功")
}
</script>

<template>
  <el-row class="login-page">
    <!-- <el-col :span="12" class="bg"></el-col> -->
    <el-col :span="6" :offset="8" class="form">
      <el-form ref="form" size="large" autocomplete="off" :model="adminData" :rules="rules">
        <el-form-item>
          <h1>管理员登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input :prefix-icon="User" placeholder="请输入管理员名" v-model="adminData.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" :prefix-icon="Lock" type="password" placeholder="请输入密码"
            v-model="adminData.password"></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button class="button" type="primary" auto-insert-space @click="login">登录</el-button>
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