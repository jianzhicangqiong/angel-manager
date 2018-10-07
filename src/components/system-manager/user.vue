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
        :current-page="currentPage"
        :page-sizes="[6, 8, 12]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
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
        currentPage: 1,
        pageSize: 6,
        total: 0,
        users: []
      }
    },

    created() {
      this._getUsers(this.currentPage, this.pageSize);
    },

    methods: {

      // 分页信息修改
      handleSizeChange(val) {
        this._getUsers(this.currentPage, val);
      },
      handleCurrentChange(val) {
        this._getUsers(val, this.pageSize);
      },

      // 编辑
      handleEdit(index, row) {
        console.log(index, row);
      },

      // 删除
      handleDelete(index, row) {
        this._deleteUserById(row);
        this._getUsers(this.currentPage, this.pageSize);
      },

      // 时间格式化
      dateFormat(row, column, cellValue, index) {
        if (cellValue == undefined) {
          return "";
        }
        return this.moment(cellValue).format("YYYY-MM-DD HH:mm:ss");
      },

      _getUsers(currentPage, pageSize) {
        getUsers(currentPage,pageSize)
          .then(result => {
            // 添加查询结果
            this.users = result.data.data.list;
            this.total = result.data.data.total;
            this.currentPage = result.data.data.currentPage;
            this.pageSize = result.data.data.pageSize;
          }, error => {
            console.log(error);
          })
      },

      _deleteUserById(row) {
        deleteUserById(row.userId).then(result => {
          if (result.status == 200) {
            // 请求成功
            if (result.data.status == 200) {
              this.$message({message: '删除用户' + row.username + '成功', type: 'success'});
              return;
            } else {
              this.$message({message: result.data.msg, type: 'warning'})
            }
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
