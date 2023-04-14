import React from 'react';
import ReactDOM from 'react-dom/client';
import Count from './components/Count';
import FirstFuncComponent from './components/FirstFuncComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Count />
     <FirstFuncComponent title='第一个函数组件' detail={{name:"张三",age:16}}>
      <p slot='header' style={{color:'#f60'}}>个人简历</p>
      <h3 slot='bottom'>该简历仅仅面试使用！</h3>
      </FirstFuncComponent>
  </>
);
console.log(React.createElement(FirstFuncComponent,
    {title:'第一个函数组件',detail:{name:'张三',age:16}},
    React.createElement('p',
      {slot:'header'},
      '个人简历'
    )
  ));

