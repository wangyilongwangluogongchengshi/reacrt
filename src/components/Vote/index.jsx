import React, { useContext, useState,useEffect } from 'react'
import VoteMain from "./VoteMain"
import VoteFooter from "./VoteFooter"
import "./index.less"
import { connect } from 'react-redux'
const Vote = function Vote(props) {
  console.log(props);
  const {supNum,oppNum} = props.vote
    return (
        <div className='voteContaienr'>
            <header>
                <h2>投票组件</h2>
            </header>
            <VoteMain supNum={supNum} oppNum={oppNum} />
            <VoteFooter/>
        </div>
    )
}

const mapStateToProps =(state)=>{
  return {
    vote:state.voteReducer
  }
}

export default connect(mapStateToProps)(Vote)
