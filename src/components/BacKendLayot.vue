<template>
  <div class="backend-layout">
    <el-container class="backend-container">
      <Sidebar />
      <el-container >
        <el-header>
          <Navbar />
        </el-header>
        <el-main>
          <RouterView />
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
</style>
