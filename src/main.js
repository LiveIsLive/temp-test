import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/iconfont/iconfont.css'

// 引入axios
import axios from 'axios'

// 配置axios请求前缀
axios.defaults.baseURL = '/campus'
// vue3.x创建vue实例方法
const app = createApp(App).use(router)
// 指定vue实例元素
app.mount('#app')
// 配置全局的axios使用$axios代替
app.config.globalProperties.$axios = axios
