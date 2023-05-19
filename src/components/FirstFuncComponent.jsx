import React from 'react'
export default function firstFuncComponent(props) {
//   console.log(props);
  const children = props.children
  const header =children.filter(dom=>{
    // console.log(dom);
    return dom.props.slot === 'header'
  }) 
  const bottom = children.filter(dom=>{
    return dom.props.slot === 'bottom'
  })
  return (
    <div style={{marginTop:'16px'}}>
      
        {/* {props.title} */}

        <div>{header}</div>
        <h1 style={{color:"red"}}>姓名：{props.detail.name}</h1>
        <h1 style={{color:"red"}}>年纪：{props.detail.age}</h1>
        <div>{bottom}</div>
    </div>
  )
}
