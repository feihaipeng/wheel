<template>
  <div>
    <el-container  class="containerBox">
      <el-header><headerIndex /></el-header>
      <el-container>
        <el-aside width="200px"><asideIndex /></el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headerIndex from './../components/header/index'
import asideIndex from './../components/aside/index'
export default {
  components: {
    headerIndex,
    asideIndex
  }
}
</script>
<style>
  .containerBox {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #B3C0D1;
  }
  .el-header, .el-footer {
    padding: 0px !important;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /* text-align: center;
    line-height: 200px; */
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
