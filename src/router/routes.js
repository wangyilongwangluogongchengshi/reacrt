import { lazy } from "react";
import { Navigate } from "react-router-dom"
import A from '../views/A';
// import B from '../views/B';
// import C from '../views/C';
// import A1 from '../views/a/A1.jsx';
// import A2 from '../views/a/A2.jsx';
// import A3 from '../views/a/A3.jsx';
// import Test from "../views/Test"
/* A版块的二级路由 */
const aRoutes = [{
    path: '/a',
    component: () => <Navigate to="/a/a1" />
}, {
    path: '/a/a1',
    name: 'a-a1',
    component: lazy(() => import(/* webpackChunkName:"AChild" */'../views/a/A1')),
    meta: {}
}, {
    path: '/a/a2',
    name: 'a-a2',
    component: lazy(() => import(/* webpackChunkName:"AChild" */'../views/a/A2')),
    meta: {}
}, {
    path: '/a/a3',
    name: 'a-a3',
    component: lazy(() => import(/* webpackChunkName:"AChild" */'../views/a/A3')),
    meta: {}
}];

const routes = [
    {
        path:'/',
        component: () => <Navigate to="/a" />
    },
    {
        path:'/a',
        name:'a',
        component:A,
        children: aRoutes
    },
    {
        path:'/test',
        name:'test',
        component:lazy(()=>import ('../views/Test')),
        // children: aRoutes
    },
    {
        path:'/b/:name?/:age?',
        name:'b',
        component:lazy(()=>import ('../views/B')),
        meta:{}
    },
    {
        path: '/c',
        name: 'c',
        component: lazy(() => import('../views/C')),
        meta: {
            auth:true
        }
    }
]

export default routes