<template>
  <div id="home">
    <el-container>
      <el-header>
        <span>Admin</span>
      </el-header>

      <el-container>
        <!--侧边栏-->
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="this.$router.path"
                router
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>系统管理</span>
                  </template>

                  <el-menu-item-group>
                    <el-menu-item index="1-1">用户组管理</el-menu-item>
                    <el-menu-item index="/systemManager/user">用户管理</el-menu-item>
                    <el-menu-item index="1-3">角色管理</el-menu-item>
                    <el-menu-item index="1-4">权限管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>

        <!--类容主体-->
        <el-main>

          <!--导航路径。。。面包屑-->
          <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '' }">首页</el-breadcrumb-item>
          </el-breadcrumb>

          <!--内容显示-->
          <router-view></router-view>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        props:['currentPath']
      }
    },

    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100%;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 80px !important;
    line-height: 80px;
  }

  .el-container {
    height: 100%;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    overflow: hidden;
  }

  .breadcrumb {
    width: 100%;
    line-height: 40px;
    margin-bottom: 10px;
  }

  /*body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }*/
</style>
