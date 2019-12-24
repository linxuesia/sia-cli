/**
 * 表单检测的mixin
 */
import { Toast } from 'vant'
const formMixins = {
    data(){
        return {

        }
    },
    methods: {
        // 验证表单 不显示
        checkForm(){
            return new Promise((resolve, reject)=>{
                let flag = true
                let name, msg, type, text;
                for(let i=0; i<this.requiredRules.length; i++){
                    name = this.requiredRules[i].name;
                    text = this.requiredRules[i].text;
                    type = this.requiredRules[i].type;
                    // 判断值是否为空
                    if(this.form[name] == '' || this.isEmptyObject(this.form[name])){
                        flag = false;
                        msg = `${text}不能为空`;
                        break;
                    }
                    // 判断数字是否小于零
                    // pNumber 正数 nNumber 负数 zNumber 零
                    if(type && type == 'pNumber' && Number(this.form[name]) <= 0){
                        msg = `${text}不合法`;
                        flag = false;
                        break;
                    }
                }
                if(flag){
                    resolve('ok')
                }else{
                    Toast.fail(msg)
                }
            })
        },
        // 判断空对象
        isEmptyObject(e) {
            var t;
            for (t in e)
                return false;
            return true
        },
        // 密码验证规则
        checkPsw(val){
            let reg = /^(\w){6,20}$/
            return reg.test(val)
        },
        clearForm(){

        },
        // 检查数字合法性 blur时调用
        checkNumber(val){
          if(val != ''){
            if(Number(val) <= 0){
              this.$toast('数字不合法');
              return false;
            }else{
              return true;
            }
          }else{
            return false;
          }
        },
        // 检查是否是大于0的整数
        checkFloor(val){
          if(val != '' && Number(val)>0){
            let str = val + '';
            if(str.indexOf('.') != -1){
              this.$toast('请输入正整数');
              return false;
            }else{
              return true;
            }
          }else{
            return false;
          }
        }
    }
}
export default formMixins;
