import Home from '@views/index/index'
const commonRouters = [
    {
        path: '/',
        name: 'layout',
        redirect: '/index',
        meta: {
            title: process.env.VUE_APP_TITLE
        }
    },

    {
        path: '/index',
        name: 'index',
        component: Home,
        meta: {
            title: process.env.VUE_APP_TITLE
        }
    },

    {
        path: '/demo',
        name: 'demo',
        component: ()=> import('@views/demo/index'),
        meta: {
            title: '组件演示页面'
        }
    }
]

export default commonRouters;
