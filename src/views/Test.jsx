import React from 'react'
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
export default function Test(props) {
    const {navigate} = props
  return (
    <div>
        <button onClick={()=>{
         navigate({
          pathname:'/b/zhangsan/18',//路由传参
          search:qs.stringify({height:180,weight:120})//query传参
         })
        }}>返回</button>
    </div>
  )
}
