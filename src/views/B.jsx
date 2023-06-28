import qs from 'qs';
import React from 'react'
import {useNavigate,useParams, useSearchParams, useLocation, useMatch  } from 'react-router-dom'
export default function B(props) {
  const navigate = useNavigate();
// console.log(navigate);
//获取路径参数信息
let params = useParams();
/**
 * {name:'zhangsan',age:18}
 */
console.log('useParams:', params);

//获取问号传参信息,query
//height=180&weight=120
let [search] = useSearchParams();
search = search.toString();
console.log('useSearchParams:', search);

//获取location信息「pathname/serach/state...」
let location = useLocation();
//{height: 180, weight: 120}
console.log('useLocation:', location.state);

//获取match信息
console.log('useMatch:', useMatch(location.pathname));

  return (
    <>
    <h2>B的内容</h2>
    <button onClick={()=>{
      // 第一种
    //  navigate('/test')
    //第二种
    navigate('/test',{
      replace:true
    })
    // 第三种
    
    // navigate(-1);  回退
    }}>goTest</button>
    </>
    
  )
}
