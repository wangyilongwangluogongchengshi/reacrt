import React from 'react'
import './layout.less'
import { HashRouter, Link } from "react-router-dom"
import RouterView from '../router';

// 基础路由配置
export default function Layout() {
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
                  <RouterView />
                </main>
            </HashRouter>
        </>
    )
}