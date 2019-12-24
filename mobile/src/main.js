import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

// 导入全局样式
import './assets/font/iconfont.css'
import './assets/sass/common.scss'

// 导入flexible
import 'amfe-flexible';

// 挂载全局request
import http from '@/utils/request'
Vue.prototype.$ajax = http

// 导入全局组件
require('./components/global/index')

// // 解决移动端触摸事件
// import FastClick from 'fastclick'
// FastClick.attach(document.body)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
