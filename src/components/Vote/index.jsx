import React, { useState } from 'react'
import VoteMain from "./VoteMain"
import VoteFooter from "./VoteFooter"
import "./index.less"
export default function Vote() {
 const [voteInfo, setvoteInfo] = useState({
    supNum:0,
    oppNum:0
 })
 const changeVoteInfo = (type)=>{
    if (type === 'opp') {
        console.log(123456);
        setvoteInfo({
            ...voteInfo,
            oppNum:voteInfo.oppNum +=1
        })
    }else{
        setvoteInfo({
            ...voteInfo,
            supNum:voteInfo.supNum +=1
        })
    }
 }
  return (
    <div className='voteContaienr'>
        <header>
            <h2>投票组件</h2>
        </header>
        <VoteMain supNum={voteInfo.supNum} oppNum={voteInfo.oppNum}/>
        <VoteFooter change={changeVoteInfo}/>
    </div>

  )
}
