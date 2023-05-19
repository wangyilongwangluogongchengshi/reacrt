import React, { useState } from 'react'

function usePartialState(initialState) {
    let [state,setState] = useState(initialState)
    const setPartialState = (val)=>{
        setState({
            ...state,
            ...val
        })
    }
    return [state,setPartialState]
}

export default function 自定义Hook() {
    const [num, setnum] = usePartialState({
        num1:20,
        num2:30
    })
  return (
    <div>
        <h2>{num.num2},{num.num1}</h2>
        <button onClick={()=>{
            setnum({
                num1:50
            })
        }}>++</button>
    </div>
  )
}
