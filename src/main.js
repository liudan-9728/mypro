import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


// console.log('-----',import.meta.env.MODE)
// console.log(6666,import.meta.env)