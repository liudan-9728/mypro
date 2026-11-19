<template>
  <el-aside :width="!collapseValue? '264px': '64px'"">
    <el-menu
      class="aside-menu"
      :collapse="collapseValue"
      :collapse-transition="false"
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="logo">
        <img src="@/assets/img/机器人.png" alt="Logo" width="30"/>
        <div class="logo-text" v-show="!collapseValue">
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
        <span v-show="!collapseValue">{{ item.meta.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useStore } from '@/store/index'
import { watch, computed } from 'vue'

const router = useRouter()
const store = useStore()

const collapseValue = computed(() => store.isCollapse)

// 切换路由菜单
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

// watch(
//   () => useStore().isCollapse,
//   (newVal) => {
//     console.log('isCollapse changed:', newVal)
//   }
// )
</script>
<style lang="scss" scoped>
.aside-menu {
  height: 100%;

  .logo {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content: center;
    border-bottom: 1px solid #e5e7eb;
    
    .logo-text {
      margin-left: 10px;
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
