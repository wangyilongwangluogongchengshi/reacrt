import React from 'react'
import "./index.less"
export default function VoteMain(props) {
    const {supNum,oppNum} = props
  return (
    <div className='voteMain'>
        <h4>支持人数：{supNum}</h4>
        <h4>反对人数：{oppNum}</h4>
        <h4>总票数：{supNum+oppNum}</h4>
    </div>
  )
}
