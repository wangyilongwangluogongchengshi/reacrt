import qs from 'qs';
import React from 'react'
import {useLocation, useRouteMatch } from 'react-router-dom'
export default function B(props) {
  console.log(props);
  const {history} = props
  // 获取路由中的query参数
  // const search = qs.parse(props.location.search.split('?')[1]) 
  // const {search} = useLocation()

  // 获取路由参数 params
  const {params} = useRouteMatch()
  console.log(params);

  const params2 = props.match.params
  console.log(params2);
  

  return (
    <>
    <h2>B的内容</h2>
    <button onClick={()=>{
      // console.log(search);
      history.push('/test')
    }}>goTest</button>
    </>
    
  )
}
