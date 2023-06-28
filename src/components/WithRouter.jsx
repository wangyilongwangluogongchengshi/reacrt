import React from 'react'
import { Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';

export default function WithRouter(component) {
    return function HOC(props) {
        // 获取路由信息
        // 提前获取路由信息，作为属性传递给Component
        const navigate = useNavigate(),
            location = useLocation(),
            params = useParams(),
            [usp] = useSearchParams();
        return <Component {...props} navigate={navigate} location={location} params={params} usp={usp} />;

    }
}
