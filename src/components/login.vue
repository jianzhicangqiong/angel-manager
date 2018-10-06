<template>
  <div id="login-ui">

    <div class="login-card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>登录界面</span>
        </div>

        <el-form label-width="80px" :model="user" ref="user">
          <el-form-item label="登录名称">
            <el-input v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input type="password" v-model="user.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">提交</el-button>
            <el-button @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        user: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      login() {
        this.$router.push({
          path: '/home'
        })
      },
      resetForm() {
        this.$refs[this.user].resetFields();
      }
    }
  }
</script>

<style scoped>

  #login-ui {
    width: 100%;
    height: 100%;
    background: beige;
  }

  .login-card {
    width: 400px;
    height: 300px;
    position: relative;
    top: 25%;
    left: 50%;
  }
</style>
