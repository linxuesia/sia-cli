import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

// 导入全局样式
// import './assets/font/iconfont.css'
import './assets/sass/common.scss'

// 挂载全局request
import http from '@/utils/request'
Vue.prototype.$ajax = http

// 导入全局组件
require('./components/global/index')


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
