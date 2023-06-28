import { lazy } from "react"
import A from "../views/A"
// import B from '../views/B'
// import C from '../views/C'
/* 
一级路由 
  重定向选项
    + redirect:true
    + from:从哪来
    + to:定向的地址
    + exact:精准匹配
  正常选项
    + path:匹配路径
    + name:路由名称
    + component:需要渲染的组件
    + meta:路由元信息
    + exact:精准匹配
*/

const routes = [
    {
        path: '/',
        /**
         * 如果需要重定向的话需要有from和to
         * 像这样
         * <Redirect exact from="/" to="/a" />
         */
        redirect: true,
        from: '/',
        to: '/a',
        exact: true
    },
    {
        path: '/a',
        component: A,
        name: 'a',
        meta: {
            // 这里面可以写带一些路由信息
        }
    },
    {
        path: '/b/:name?/:age?',
        name: 'b',
        component: lazy(()=> import('../views/B')),
        meta: {}
    }, 
    {
        path: '/test',
        name: 'test',
        component: lazy(()=> import('../views/Test')),
        meta: {}
    }, 
    {
        path: '/c',
        name: 'c',
        component: lazy(()=> import('../views/C')),
        meta: {
            auth:true
        }
    }, 
    // 如果上边都匹配不到，进入a组件
    {
        redirect: true,
        to: '/a'
    }
]

export default routes