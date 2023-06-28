/* A.jsx */
import React from "react";
// import {useRou}
import { Link, Outlet } from 'react-router-dom';
// 处理样式
import styled from "styled-components";
const DemoBox = styled.div`
    display: flex;
    .menu{
        a{
          display:block;
          font-size:16px;
        }
    }
`;

const A = function A(props) {
    console.log(props);
    return <DemoBox>
        <div className="menu">
            <Link to="/a/a1">A1</Link>
            <Link to="/a/a2">A2</Link>
            <Link to="/a/a3">A3</Link>
        </div>
        <div className="content">
            <Outlet />
            {/* <RouterView routes={aRoutes} /> */}
        </div>
    </DemoBox>;
};
export default A;
