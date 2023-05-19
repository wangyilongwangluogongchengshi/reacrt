import React, { useRef, forwardRef,useImperativeHandle } from 'react'
import { useEffect } from 'react'

export default function RefComponent() {
    let dom = useRef(null)
    let childDom = useRef(null)
    useEffect(() => {
        console.log(childDom.current);
    }, [])
    return (
        <div ref={dom}>
            RefComponent
            <FChild ref={childDom}></FChild>
        </div>
    )
}

function Child(props, ref) {
    let h1 = useRef(null)
    const test = ()=>{
        console.log("我是子组件");
    }
    useImperativeHandle(ref,()=>{
        return{
            h1:h1.current,
            test
        }
    })
    return (
        <div>
            <h1 ref={h1}>这是子组件</h1>
        </div>
    )
}
// 利用ref转发获取子组件中的元素
const FChild = forwardRef(Child)
