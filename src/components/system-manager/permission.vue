<template>
  <div>
    <!--角色Tree-->
    <div class="role">
      <h2>角色</h2>
      <el-tree
        :props="props"
        :load="loadNode"
        lazy
        show-checkbox>
      </el-tree>
    </div>

    <!--权限Tree-->
    <div class="permission">
      <h2>权限</h2>
      <el-tree
        :props="props"
        :load="loadNode"
        lazy
        show-checkbox>
      </el-tree>
    </div>
  </div>
</template>

<script>

  // 导入api
  import {
    getRolesByParentId
  } from '../../api/system-manager/role'

  let id = 1000;
  export default {
    name: "role",
    data() {
      return {
        props: {
          label: 'remark',
          isLeaf: 'isLeaf'
        },
      };
    },
    methods: {

      // 加载对Tree控件数据渲染
      loadNode(node, resolve) {
        if (node.level === 0) {
          this._getRolesByParentId(1, resolve);
        }
        if (node.level >= 1) {
          this._getRolesByParentId(node.data.roleId, resolve);
        }
      },

      // 通过角色Id获得子角色
      _getRolesByParentId(parentId, resolve) {
        getRolesByParentId(parentId).then(resp => {
          if (resp.status == 200 && resp.data.status == 200) {
            return resolve(resp.data.data);
          }
        })
      },


    }
  }
</script>

<style scoped>

  .role {
    float: left;
    width: 45%;
  }

  .permission {
    float: right;
    width: 45%;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    padding-right: 8px;
  }

</style>
