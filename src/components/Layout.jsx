import React from 'react'
import './layout.less'
import { HashRouter, BrowserRouter, Switch, Route, Link, Redirect,NavLink } from "react-router-dom"
import A from "@/views/A"
import B from '../views/B'
import C from '../views/C'
/**
 * HashRouter 哈希路由模式，
 * BrowserRouter 其实就是history模式的路由
 * 
 * 后边的的Switch，Route，Link等都需要包裹在HashRouter或者BrowserRouter下
 */
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
                    {/* 当使用NavLink时如果要添加匹配样式，应该开启严格模式  */}
                     {/* <NavLink to="/" exact activeClassName='active'>A</NavLink>
                    <NavLink to="/b" exact activeClassName='active'>B</NavLink>
                    <NavLink to="/c" exact activeClassName='active'>C</NavLink> */}
                </nav>
                <main>
                    {/* 路由容器要通过SWitch进行包裹，当一个组件匹配成功后会继续向下匹配，所以一般有二级路由的以及路由和 / 一般要通过exact匹配 */}
                    <Switch>
                        {/* <Route exact path='/' component={A}>
                        </Route> */}

                        {/* 二级路由的时候  /a要通过Redirect进行重定向 */}
                        <Redirect exact from="/" to="/a" />
                        <Route path="/a" component={A} />
                        <Route  path='/b' component={B}>
                        </Route>

                        {/* <Route exact path='/c' component={C}>
                        </Route> */}

                        {/*在component配置中还可以加入render函数，比如做一个权限的操作*/}
                        <Route  path='/c' render={() => {
                            if (!login) {
                               return <Redirect to="/" />
                            }else{
                                return <C />
                            }
                        }}>
                        </Route>
                        {/* 当所有路径都匹配不上的时候进行重定向 */}
                        <Redirect to='/' />
                    </Switch>

                </main>
            </HashRouter>
        </>
    )
}