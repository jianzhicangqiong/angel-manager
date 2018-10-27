<template>
  <el-tree
    :props="props"
    :load="loadNode"
    lazy
    show-checkbox>
  </el-tree>
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
      loadNode(node, resolve) {
        if (node.level === 0) {
          this._getRolesByParentId(1, resolve);
        }
        if (node.level >= 1) {
          this._getRolesByParentId(node.data.roleId, resolve);
        }
      },

      _getRolesByParentId(parentId, resolve) {
        getRolesByParentId(parentId).then(resp => {
          if (resp.status == 200 && resp.data.status == 200) {
            return resolve(resp.data.data);
          }
        })
      }
    }
  }
</script>

<style scoped>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
