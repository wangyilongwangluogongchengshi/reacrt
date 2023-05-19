import React, { useEffect, useState,useLayoutEffect, useRef } from 'react'
// 模拟从服务器异步获取数据
const queryData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([10, 20, 30]);
        }, 1000);
    });
};
export default function EffectComponent() {
    let dom = useRef()
    let [num, setnum] = useState(0)
    let [state,setState] = useState({page:0,limit:10})
    let [list, setList] = useState([])
    const handleClick = () => {
        setList([...list,20])
    }
    const getList = async ()=>{
        const arr = await queryData()
        setList(arr)
    }
    
    useEffect(()=>{
        getList()
    },[])
    useLayoutEffect(()=>{
        console.log(dom.current);
    },[])
    
    return (
        <div>
            <h1 ref={dom}>{num}</h1>
            {list.map((item)=>{
                return <h2>{item}</h2>
            })}
            <button onClick={
                handleClick
            }>增加10</button>
        </div>
    )
}
