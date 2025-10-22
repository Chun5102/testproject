import './assets/main.css'

import { createApp } from 'vue'
import { formatDate, formatPrice } from './components/utils/format'
import App from './App.vue'

import AlertBox from './components/AlertBox.vue'

const app = createApp(App)
app.component('AlertBox', AlertBox)
app.config.globalProperties.$formatPrice = formatPrice
app.config.globalProperties.$formatDate = formatDate
app.mount('#app')
