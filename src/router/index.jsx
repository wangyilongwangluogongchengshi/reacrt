import React from 'react'
import { Suspense } from 'react';
import { HashRouter, BrowserRouter, Switch, Route, Link, Redirect, NavLink } from "react-router-dom"
import { PropTypes } from 'prop-types';
// RouterView.defaultProps={
//     routes:{}
// }
RouterView.propTypes = {
    routes: PropTypes.array.isRequired
}

export default function RouterView(props) {
    // console.log(props);
    const { routes } = props
    return (
        <>
            <Switch>
                {
                    routes.map((route, index) => {
                        let { redirect, from, to, exact, path, name, component: Component, meta } = route
                        //通过props 将组件需要的属性存起来
                        let props = {}
                        if (redirect) {
                            props = { to };
                            if (from) props.from = from;
                            if (exact) props.exact = true;
                            return <Redirect key={index} {...props} />
                        }
                        props = { path }
                        if (exact) props.exact = true;
                        return <Route key={index} {...props} render={() => {
                            if (meta.auth === true) {
                                let token = ''
                                if (token) {

                                    return <Suspense>
                                        <Component />
                                    </Suspense>

                                } else {
                                    window.alert('请先登录在进行后续操作')
                                    return <Redirect to='/' />
                                }
                            } else {
                                // console.log("没健全");
                                return <Suspense>
                                    <Component />
                                </Suspense>
                            }
                            // 在这里可以通过meta中的信息来进行特殊处理，比如登录状态的检验

                        }} />
                    })
                }
            </Switch>
        </>
    )
}
