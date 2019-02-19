import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

// 导入全局样式
// import './assets/font/iconfont.css'
import './assets/sass/common.scss'

// 挂载全局request
import http from '@/utils/Request'
Vue.prototype.$ajax = http

// 导入全局Toast loading 组件
import Toast from '@components/common/Toast/index'
import Loading from '@components/common/Loading/index'
Vue.use(Toast)
Vue.use(Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
