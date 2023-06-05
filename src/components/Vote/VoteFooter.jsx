import React, { useContext } from 'react'
import { Button } from 'antd';
import { connect } from 'react-redux';
import * as actionTypes from "../../store/action"
import { voteAction } from '../../store/action/actionCreators';
const VoteFooter = function VoteFooter(props) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button type="primary" onClick={()=>{
                props.sup()
            }}>支持</Button>
            <Button type="primary" danger onClick={()=>{
                props.opp()
            }}>反对</Button>

        </div>
    )
}
// 第一种dispatch方法
// const mapDispatchToProps = (dispatch) => {
//     console.log(dispatch);
//     return {
//         sup() {
//             dispatch({type:actionTypes.VOTE_SUP})
//         },
//         opp() {

//             dispatch({type:actionTypes.VOTE_OPP})

//         }
//     }
// }
// export default connect(null, mapDispatchToProps)(VoteFooter)

// 第二种
//voteAction 这里的action时actioncreator的形式;通过这种形式传递，react-redux内部会通过bindActionCreators进行处理
/**
 * {
 *  sup(payload){
 *          retrun{
 *                  type:"..."
 *                  payload
 *              }
 *      }
 * }
 */
export default connect(null, voteAction)(VoteFooter)
