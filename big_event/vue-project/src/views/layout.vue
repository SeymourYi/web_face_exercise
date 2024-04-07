<script setup>
import {
  Management,
  Promotion,
  UserFilled,
  User,
  Crop,
  EditPen,
  SwitchButton,
  CaretBottom
} from '@element-plus/icons-vue'
import excel from '@/views/student/excel.vue'
</script>

<template>
  <el-container class="layout-container">
    <!-- 左侧菜单 -->
    <el-aside width="200px">
      <!-- <div class="el-aside__logo"></div> -->
      <el-menu active-text-color="#ffd04b" background-color="#3a9bc6" text-color="#fff" router>
        <el-menu-item index="/article/category">

          <span>待审核</span>
        </el-menu-item>
        <el-menu-item index="/article/student">

          <span>审核通过</span>
        </el-menu-item>
        <el-sub-menu>
          <template #title>
            <el-icon>
              <UserFilled />
            </el-icon>
            <span>管理员中心</span>
          </template>
          <el-menu-item index="/article/changepassword">
            <el-icon>
              <EditPen />
            </el-icon>
            <span>修改密码</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <!-- 右侧主区域 -->
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div><strong>毕业生信息管理平台</strong></div>
        <el-dropdown placement="bottom-end">

        </el-dropdown>
      </el-header>
      <!-- 中间区域 -->
      <el-main>
        <!-- <div style="width: 1290px; height: 570px;border: 1px solid red;"> -->




        <!-- <excel /> -->

        <router-view></router-view>
















        <!-- </div> -->
      </el-main>
      <!-- 底部区域 -->
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;

  .el-aside {
    background-color: #232323;

    &__logo {
      height: 120px;
      background: url('@/assets/logo.png') no-repeat center / 120px auto;
    }

    .el-menu {
      border-right: none;
    }
  }

  .el-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .el-dropdown__box {
      display: flex;
      align-items: center;

      .el-icon {
        color: #999;
        margin-left: 10px;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
  }

  .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
}
</style>