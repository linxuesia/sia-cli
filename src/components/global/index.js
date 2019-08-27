import Vue from 'vue'

// 自动加载 global 目录下的 .js 结尾的文件
const componentsContext = require.context('./', true, /\.js$/)

// 循环挂载到 Vue实例上
componentsContext.keys().forEach(component => {
	if (component.startsWith('./index')) {
		return
	}
	const componentConfig = componentsContext(component)
	const ctrl = componentConfig.default
	Vue.use(ctrl)
})
