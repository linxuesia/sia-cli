import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import store from '../store/index.js'
import Routers from '../router.js'
/**
 * 创建axios实例
 * @type {[type]}
 */
const http = axios.create({
    baseURL: '',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    // transformRequest: [function (data) {
    //   let newData = '';
    //   for (let k in data) {
    //     if (data.hasOwnProperty(k) === true) {
    //       newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
    //     }
    //   }
    //   return newData;
    // }]
})

/**
 * 配置请求拦截
 */
http.interceptors.request.use(config => {

    // 如果token为空 重定向到login页面
    // if(getToken()==''){
    //
    //     if(Routers.currentRoute.name!=='login'){
    //         Routers.push('/login')
    //     }
    //
    // }

    config.data = qs.stringify({ ...config.data
    })
    config.params = {
        ...config.params,
        isjoin: 0
    }
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
}, error => {    //请求错误处理

    Promise.reject(error)
    console.log(error)

})


/**
 * 配置响应拦截 404 403 500
 */
http.interceptors.response.use(response => {  //成功请求到数据
    // 请求完成关闭loading
    // Indicator.close();
    //这里根据后端提供的数据进行对应的处理
        switch (response.status) {
            case 200:
                return response.data
                break;
            case 404:
                Routers.push('/notFound')
                break;
            case 500:
                Routers.push('/errorPage')
                break;
            default:
                Routers.push('/errorPage')
                break;
        }
    },
    error => { //响应错误处理

        console.log(JSON.stringify(error))
        // 获取错误码
        // let errCode = JSON.parse(JSON.stringify(error).response.status)
        // 网络请求失败 同意提示 也可以关闭
        // Toast.show(errCode);

        return Promise.reject(error)
    }
);


export default http;
