
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  // ...
  plugins: [
    // 配置别名
    vue(), // 必须调用 vue() 并放入 plugins 数组

    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src', // 将 @ 映射到 src 目录
    },
  },
  //本地代理
  server:{

  }
  //打包配置
  //插件配置

})