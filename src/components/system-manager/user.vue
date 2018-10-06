<template>
  <div id="user-list">
    <el-table
      :data="users"
      stripe
      height="85%"
      width="100%">

      <!--表格列定义-->
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        prop="username"
        label="用户名"
        fixed>
      </el-table-column>

      <el-table-column
        prop="phone"
        label="手机">
      </el-table-column>

      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>

      <el-table-column
        prop="lastLoginTime"
        :formatter="dateFormat"
        label="最后登录时间">
      </el-table-column>

      <el-table-column
        prop="roles"
        label="角色">
      </el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[6, 12]"
        :page-size="6"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>

  // 导入api
  import {
    getUsers,
    deleteUserById
  } from '../../api/system-manager/user'

  export default {
    name: "user-manager",
    data() {
      return {
        currentPage4: 4,
        users: []
      }
    },

    created() {
      this._getUsers();
    },


    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        this._deleteUserById(row);
        this._getUsers();
      },

      // 时间格式化
      dateFormat(row, column, cellValue, index) {
        if (cellValue == undefined) {
          return "";
        }
        return this.moment(cellValue).format("YYYY-MM-DD HH:mm:ss");
      },

      _getUsers() {
        getUsers().then(result => {
          if (result.status != 200) {
            this.$message({
              message: '错误',
              type: 'error'
            });
            return;
          }
          this.users = result.data;
        });
      },

      _deleteUserById(row) {
        deleteUserById(row.userId).then(result => {
          if (result.status == 200) {
            this.$message({
              message: '删除用户' + row.username + '成功',
              type: 'success'
            });
          }
        })
      }
    }
  }
</script>

<style>

  #user-list {
    width: 100%;
    height: 100%;
  }

  .block {
    position: absolute;
    bottom: 20px;
  }

</style>
