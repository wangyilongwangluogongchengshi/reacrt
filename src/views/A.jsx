/* A.jsx */
import React from "react";
import { Link, Route, Redirect, Switch } from 'react-router-dom';
// import A1 from './a/A1';
import A1 from './a/A1';
import A2 from './a/A2';
import A3 from './a/A3';

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

const A = function A() {
    // '/a/xxx' 中的 '/a' 不能省略！！
    return <DemoBox>
        <div className="menu">
            <Link to="/a/a1">A1</Link>
            <Link to="/a/a2">A2</Link>
            <Link to="/a/a3">A3</Link>
        </div>
        <div className="content">
            <Switch>
                <Redirect exact from="/a" to="/a/a1" />
                <Route path="/a/a1" component={A1} />
                <Route path="/a/a2" component={A2} />
                <Route path="/a/a3" component={A3} />
            </Switch>
        </div>
    </DemoBox>;
};
export default A;
