import React,{useContext} from 'react'
import { Button } from 'antd';
import StoreContext from '../../Store'
import * as actionTypes from '@/store/action'
export default function VoteFooter() {
   const store = useContext(StoreContext)
   const {supNum,oppNum} = store.getState()
   const dispatch = store.dispatch
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            <Button type="primary" onClick={()=>{
                dispatch({type:actionTypes.VOTE_SUP})
            }}>支持</Button>
            

            <Button type="primary" danger onClick={()=>{
                dispatch({type:actionTypes.VOTE_OPP})
            }}>反对</Button>

        </div>
    )
}
