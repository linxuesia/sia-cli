import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 导入全局样式
// import './assets/font/iconfont.css'
import './assets/sass/common.scss'

// 挂载全局request
import http from '@/utils/Request'
Vue.prototype.$ajax = http


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
