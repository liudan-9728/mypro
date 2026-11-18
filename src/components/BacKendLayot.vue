<template>
  <div class="backend-layout">
    <el-container class="backend-container">
      <Sidebar />
      <el-container>
        <el-header>
          <Navbar />
        </el-header>
        <el-main class="backend-main">
          <RouterView class="backend-view" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
</script>
<style lang="scss" scoped>
.backend-layout {
  height: 100vh;
}
.backend-container {
  height: 100%;
}
.backend-main {
  min-height: calc(100vh - 65px);
}
.backend-view {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0 10px;
  height: 100%;
  //  min-height: calc(100vh - 65px);
}
</style>
