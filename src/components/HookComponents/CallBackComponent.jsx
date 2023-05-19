import React, { useState,useCallback } from 'react'
const Child = React.memo(function Child(props) {
    console.log('render');
    return(
        <div>
            {props.txt}
            <button onClick={props.changeNum}>点击我</button>
        </div>
    )
})

export default function CallBackComponent() {
    const [text, settext] = useState('这是一段文字')
    const [num, setnum] = useState(0)
    const changeNum = useCallback(
        ()=>{
            console.log("123456");
        },
      [text],
    )
    
  return (
    <div>
        <Child txt={text} changeNum={changeNum} />
        <div>number:{num}</div>
        <input type="text" onChange={(e)=>{
            setnum(e.target.value)
        }} />
    </div>
  )
}
