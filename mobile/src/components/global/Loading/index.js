// 导入模板
import Loadingtp from './Loading.vue'
const Loading = {}
 Loading.install = function(Vue, options){

     // 定义模板
     let loadingTpl = Vue.extend(Loadingtp)

     // 挂载模板
     let tpl = new loadingTpl({
         el: document.createElement('div')
     })

     // 添加元素到页面
     document.body.appendChild(tpl.$el)

     // 定义 loading 方法
     Vue.prototype.$showloading = () => {
        tpl.show = true
     }

     // 定义关闭 loading 方法
     Vue.prototype.$hideloading = () => {
        tpl.show = false
     }

 }

 export default Loading
