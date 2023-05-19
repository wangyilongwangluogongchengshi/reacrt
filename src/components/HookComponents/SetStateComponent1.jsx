import React from 'react'
import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
// export default function SetStateComponent1() {

//     let [num, setnum] = useState(0)
//     const handleClick = () => {
//         setnum(num+10)
//         setnum(num+10)
//         setnum(num+10)
//         setnum(num+10)
//     }
//     return (
//         <div>
//             <h1>{num}</h1>
//             <button onClick={
//                 handleClick
//             }>增加10</button>
//         </div>
//     )
// }


// export default function SetStateComponent1() {
//     console.log("Render 渲染");
//     let [x, setX] = useState(10)
//     const handle = () => {
//         for (let i = 0; i < 10; i++) {
//                 setX((prex)=>{
//                     return prex+1
//                 })
//         }
//     }
//     return (
//         <div>
//             <h1>x:{x}</h1>
//             <button onClick={
//                 handle
//             }>增加</button>
//         </div>
//     )
// }
export default function SetStateComponent1() {
    console.log("Render 渲染");
    let [x, setX] = useState(()=>{
        console.log(12345);
        let n = 0
        for (let i = 0; i < 100; i++) {
            n++
        }
        return n
    })
    
    return (
        <div>
            <h1>x:{x}</h1>
        </div>
    )
}

// 这是一段useState的伪代码
var _state
function _useState(initialValue) {
    // 判断参数是不是一个函数
    if (!_state) {
        if (typeof initialValue === 'function') {
            _state = initialValue()
        }else{
            _state = initialValue()
        }
    }
    function setState(value) {
        if(Object.is(_state,value)) return;
        if (typeof value === 'function') {
            _state = value(_state)
        }else{
            _state = value
        }
    }
    return [_state,setState]
}
