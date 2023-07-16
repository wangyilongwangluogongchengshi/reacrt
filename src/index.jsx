import React from 'react';
import ReactDOM from 'react-dom/client';
/* 使用ANTD组件库 */
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import zhCN from 'antd/locale/zh_CN';
import './index.less';
// import "./Iterator"
import store from './store'
import Layout from './components/Layout';
import Vote from "./views/Vote"
import DemoCount from "./views/DemoCount"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <Vote />
            <DemoCount />
        </Provider>

    </ConfigProvider>
);