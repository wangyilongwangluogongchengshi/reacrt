import React, { useContext, useState,useEffect } from 'react'
import VoteMain from "./VoteMain"
import VoteFooter from "./VoteFooter"
import StoreContext from '../../Store'
import "./index.less"
export default function Vote() {
    const store = useContext(StoreContext)
    console.log(store.getState());
    const {supNum,oppNum} = store.getState().voteReducer
    const [forceUpdate, setforceUpdate] = useState({})
    useEffect(() => {
      store.subscribe(()=>{
        setforceUpdate({})
      })
    }, [])
    
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
