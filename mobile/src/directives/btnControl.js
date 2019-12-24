import Vue from 'vue'
/**权限指令**/
const btnControl = Vue.directive('has', {
	inserted: function(el, binding, vnode) {
		// 获取按钮权限
		let btnPermissions = el.value || el.getAttribute('value');
		let isExist = false;
		let btnPermissionsStr = JSON.parse(sessionStorage.getItem("btnPermissions"));
		if (btnPermissionsStr == undefined || btnPermissionsStr == null) {
			return el.parentNode.removeChild(el);
		}
		if (btnPermissionsStr.indexOf(btnPermissions) == -1) {
			return el.parentNode.removeChild(el);
		}

	}
});

export default btnControl;
