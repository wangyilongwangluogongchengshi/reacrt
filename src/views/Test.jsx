import React from 'react'
import qs from 'qs';
export default function Test(props) {
    const {history} = props
    const query = {
      name:'zhangsa',
      age:18
    }
  return (
    <div>
        <button onClick={()=>{
          // console.log(qs.stringify(query));
          // return
          // 路由传参
            // history.push({
            //     pathname: '/b',
            //     search:qs.stringify(query)
            // });

            //路径传参
            history.push('/b/zhangsan/18')
        }}>返回</button>
    </div>
  )
}
