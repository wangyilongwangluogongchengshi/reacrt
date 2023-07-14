import React, { Suspense } from 'react'
import {  Routes, Route, useNavigate, useLocation, useParams, useSearchParams, Navigate  } from "react-router-dom"
import routes from "./routes"

// 在该函数内部可以做一下其他事情，比如可以讲路由的那些方法，作为参数传递给组件，做权限管理等
function Element(props) {
    const Component = props.component
    const auth = props.meta?props.meta.auth:null
    const token = localStorage.getItem("admin_token")
    // console.log(props);
    // console.log(auth,token);
    // 把路由信息先获取到，最后基于属性传递给组件：只要是基于<Route>匹配渲染的组件，都可以基于属性获取路由信息
    const navigate = useNavigate(),
        location = useLocation(),
        params = useParams(),
        [usp] = useSearchParams();
    if (token&&auth || !auth) {
        return <Component navigate={navigate} location={location} params={params} usp={usp} />;
    }
    if (auth&&!token) {
        alert('请登录')
        return <Navigate to='/a' />;
    }
}

function createRoute(routes) {
    return (
        <>
            {routes.map((item, index) => {
                return <Route path={item.path} key={index} element={<Element {...item} />}>
                    {item.children ? createRoute(item.children) : null}
                </Route>
            })}
        </>
    )
}

export default function RouterView() {
    return (
        <Suspense fallback={<>正在处理中...</>}>
            <Routes>
                {createRoute(routes)}
            </Routes>
        </Suspense>
    )
}
