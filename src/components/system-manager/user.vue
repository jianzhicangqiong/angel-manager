<template>
  <div id="user-list">
    <el-table
      :data="tableData"
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
        prop="status"
        label="状态">
      </el-table-column>

      <el-table-column
        prop="lastLoginTime"
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
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
  export default {
    name: "user-manager",
    data() {
        return {
          currentPage4: 4,
          tableData: [{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          },{
            username: '王小虎',
            status: '可用',
            lastLoginTime: '2018-10-5',
            roles: 'user'
          }]
        }
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
