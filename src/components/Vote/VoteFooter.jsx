import React from 'react'
import { Button } from 'antd';
export default function VoteFooter(props) {
    const changeNum = props.change
    // console.log(changeNum);
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button type="primary" onClick={()=>{
                changeNum('sup')
            }}>支持</Button>
            <Button type="primary" danger onClick={()=>{
                changeNum('opp')
            }}>反对</Button>
        </div>
    )
}
