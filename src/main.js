import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'



// createApp(App).mount('#app')
const app = createApp(App)
app.mount('#app')
app.use(ElementPlus)

