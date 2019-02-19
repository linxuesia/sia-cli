// 导入模板
import Toastp from './Toast.vue'
const Toast = {}
 Toast.install = function(Vue, options){

     // 定义模板
     let toastTpl = Vue.extend(Toastp)

     // 挂载模板
     let tpl = new toastTpl({
         el: document.createElement('div')
     })

     // 定义 toast 方法
     Vue.prototype.$toast = (txt, options) => {

         // 设置默认样式和默认消失时间
         let opt = {
             position: 'top',
             duration: 2000
         }

         // 如果定义了配置项 使用传入的配置
         for(let item in options){
             opt[item] = options[item]
         }


        tpl.text = txt
        tpl.show = true
        document.body.appendChild(tpl.$el)
        console.log(tpl)
        // document.body.append(tpl)
        setTimeout(()=>{
            // document.body.removeChild(tpl.$el)
            tpl.show = false
        }, opt.duration)

     }

 }

 export default Toast
