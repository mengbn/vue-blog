<template>
<div class="addNotes">
  <svg-icon icon-class="addnotes"></svg-icon>
  <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        新增<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>新笔记</el-dropdown-item>
      <el-dropdown-item>Markdown</el-dropdown-item>
      <el-dropdown-item>新脑图</el-dropdown-item>
      <el-dropdown-item>文件夹</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>
<script>
export default {
  name: 'add-notes'
}
</script>
<style rel="stylesheet/scss" lang="scss">
.addNotes{
  position: relative;
  display: inline-block;
}
</style>
