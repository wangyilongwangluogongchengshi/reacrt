import React from 'react';
import ReactDOM from 'react-dom/client';
/* 使用ANTD组件库 */
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import './index.less';
import "./Iterator"

import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCN}>
       
        <Layout />
       
    </ConfigProvider>
);