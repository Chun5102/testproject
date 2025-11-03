import './assets/main.css'

import { createApp } from 'vue'
import formatPlugin from './components/plugins/formatPlugin' // 載入插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import AlertBox from './components/AlertBox.vue'
import router from './router'

const app = createApp(App)
app.component('AlertBox', AlertBox)
app.use(formatPlugin) // 註冊插件
app.use(ElementPlus)
app.use(router)
app.mount('#app')
