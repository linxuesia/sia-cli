import Vue from 'vue'
import Router from 'vue-router'

// 导入路由模块

// 自动加载 modules 目录下的 .js 结尾的文件
const routesContext = require.context('./modules', true, /\.js$/)

let Routes = []
// 循环路由文件
routesContext.keys().forEach(route => {
	const router = routesContext(route)
	Routes = [...Routes, ...router.default]
})

Vue.use(Router)

export default new Router({
    base: process.env.VUE_APP_URL,
    scrollBehavior: () => ({
        y: 0
    }),
    routes: Routes
});
