import React from 'react'
import './layout.less'
import { HashRouter, BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom"
/* 导入需要的组件 */
import A from '../views/A';
import B from '../views/B';
import C from '../views/C';
import A1 from '../views/a/A1.jsx';
import A2 from '../views/a/A2.jsx';
import A3 from '../views/a/A3.jsx';
import Test from "../views/Test"
// 基础路由配置
export default function Layout() {
    let login = false
    return (
        <>
            <HashRouter>
                <nav>
                    {/* Link */}
                    <Link to="/">A</Link>
                    <Link to="/b">B</Link>
                    <Link to="/c">C</Link>

                </nav>
                <main>
                    {/* 
                        6版本中路由通过Routes进行包裹，替换Switch
                    */}

                    <Routes>
                        <Route path='/' element={<Navigate to="/a" />} />
                        <Route path='/a' element={<A />}>
                            {/* 6版本的多级路由不需要再分页面写了  直接在内部嵌套 */}
                            <Route path='/a' element={<Navigate to='/a/a1' />} />
                            <Route path='/a/a1' element={<A1 />} />
                            <Route path='/a/a2' element={<A2 />} />
                            <Route path='/a/a3' element={<A3 />} />
                        </Route>
                        <Route path='/b/:name?/:age?' element={<B />} />
                        <Route path='/c' element={<C />} />
                        <Route path='/test' element={<Test />} />
                        {/* 如果以上都不匹配，我们可以渲染404组件，也可以重定向到A组件「传递不同的问号参数信息」 */}
                        <Route path="*" element={<Navigate to={{
                            pathname: '/a',
                            search: '?from=404'
                        }} />} />

                    </Routes>
                </main>
            </HashRouter>
        </>
    )
}