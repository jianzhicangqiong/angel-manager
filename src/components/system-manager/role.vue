<template>
  <el-tree
    :props="props"
    :load="loadNode"
    lazy
    show-checkbox
    node-key="id"
    default-expand-all
    :expand-on-click-node="false">
    <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
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
          label: 'name',
          isLeaf: 'isLeaf'
        },
      };
    },
    methods: {
      append(data) {
        const newChild = {id: id++, label: 'testtest', children: []};
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      loadNode(node, resolve) {
        if (node.level === 0) {
          this._getRolesByParentId(1, resolve);
        }

        if (node.level > 1) {
          this._getRolesByParentId(node.level, resolve);
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
