<template>
  <el-aside width="264px">
    <el-menu class="aside-menu" @open="handleOpen" @close="handleClose">
      <div class="logo">
        <img src="@/assets/img/机器人.png" alt="Logo" />
        <div class="logo-text">
          <h1 class="logo-title">心理健康Ai助手</h1>
          <p class="logo-subtitle">为您提供专业的心理健康支持</p>
        </div>
      </div>
      <el-menu-item
        index="1"
        v-for="(item, index) in router.options.routes[0].children"
        :key="item.path"
        @click="router.push(item.path)"
      >
        <el-icon><component :is="item.meta.icon"></component></el-icon>
        {{ item.meta.title }}
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(router.options.routes[0].children) // 获取当前路由对象

// 切换路由菜单
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
.aside-menu {
  height: 100%;
  
  .logo {
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #e5e7eb;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    .logo-text {
      .logo-title {
        font-size: 18px;
        font-weight: bold;
        margin: 0;
      }
      .logo-subtitle {
        font-size: 12px;
        color: #999;
        margin: 0;
      }
    }
  }
}
</style>
