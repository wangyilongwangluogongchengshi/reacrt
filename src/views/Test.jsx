import React from 'react'
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
export default function Test(props) {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>{
          //方式三
        //  navigate({
        //   pathname:'/b/zhangsan/18',//路由传参
        //   search:qs.stringify({height:180,weight:120})//query传参
        //  })

        //隐式传参
         navigate('/b',{
          state:{
            height:180,
            weight:120
          }
         })
        }}>返回</button>
    </div>
  )
}
