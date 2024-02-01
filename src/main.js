import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/styles/index.scss' // 默认全局样式
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
