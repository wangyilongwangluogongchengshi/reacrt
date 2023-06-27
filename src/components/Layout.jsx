import React from 'react'
import './layout.less'
import { HashRouter, BrowserRouter, Link} from "react-router-dom"
import routes from '../router/routes'
import RouterView from '../router'
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
                  <RouterView routes={routes} />
                </main>
            </HashRouter>
        </>
    )
}