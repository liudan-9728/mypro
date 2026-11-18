<template>
  <div class="navbar">

    <div class="navbar-logo">
      <!-- 展开收起 -->
      <el-button @click="clickCollapse">
        <el-icon><Fold /></el-icon>
      </el-button>
      <div>{{router.currentRoute.value.meta.title}}</div>
    </div>

    <!-- 下拉退出登陆 -->
    <el-dropdown @command="handleLogout">
      <div class="navbar-list">
        <el-avatar
          :size="35"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />

        <span style="margin-left: 10px">admin</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </div>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="logout">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from '@/store/index'
import { watch, computed } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const clickCollapse = () => {
  store.handleCollapse()
}

// 退出登陆的操作
const handleLogout = (command: string) => {
  if (command === 'logout') {
    // 退出登陆的逻辑
    console.log('退出登陆')
  }
}
</script>
<style scoped lang="scss">
.navbar {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  //   box-shadow: inset 0 -1px 0 0 #eaeaea;
  padding: 0 10px;
  &-list {
    display: flex;
    align-items: center;
  }
  &-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: bold;
  }
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}
</style>
