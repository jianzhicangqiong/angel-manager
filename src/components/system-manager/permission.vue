<template>
  <el-tree
    :props="props"
    :load="loadNode"
    lazy
    show-checkbox>
  </el-tree>
</template>

<script>
  export default {
    name: "permission",
    data() {
      return {
        props: {
          label: 'remark',
          isLeaf: 'isLeaf'
        },
      };
    },
  }
</script>

<style scoped>

</style>
