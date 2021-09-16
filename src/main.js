/* eslint-disable indent */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'

import axios from 'axios'
Vue.prototype.$http = axios
    // 配置请求根路径
axios.defaults.baseURL = 'http://www.tangxiaoyang.vip:8888/api/v2/'
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
        // eslint-disable-next-line eol-last
}).$mount('#app')