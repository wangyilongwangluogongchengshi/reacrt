import React, { Component } from 'react'
import VoteMain from './VoteMain'
import VoteFooter from './VoteFooter'
import VoteContext from "./voteContext"
import './index.less'
import PropTypes from "prop-types";
//旧的API
// const types = {
//     supNum:PropTypes.number,
//     oppNum:PropTypes.number,
//     change:PropTypes.func
// }
// export default class Vote extends Component {
//     // 旧的API
//     // 先设置静态属性childContextTypes 进行类型约束
//     static childContextTypes = types
//     state = {
//         supNum:0,
//         oppNum:0
//     }
//     changeNum = (type)=>{
//         let {supNum,oppNum} = this.state
//         if (type === 'opp') {
//         //    console.log(oppNum);
//             this.setState({
//                 oppNum : oppNum+1
//             })
//         }else{
//             // console.log(oppNum);
//             this.setState({
//                 supNum : supNum+1
//             })
//         }
//     }
//     // 再添加该方法，该方法返回的值为父组件提供的上下文
//     getChildContext(){
//         return{
//             supNum:this.state.supNum,
//             oppNum:this.state.oppNum,
//             change:this.changeNum
//         }
//     }
//   render() {
//     // 
//     return (
//       <div className='voteContaienr'>
//         <header>
//             <h2>投票组件</h2>
//         </header>
//         <VoteMain/>
//         <VoteFooter/>
//       </div>
//     )
//   }
// }

// 新的API
export default class Vote extends Component {

    state = {
        supNum: 0,
        oppNum: 0
    }
    changeNum = (type) => {
        let { supNum, oppNum } = this.state
        if (type === 'opp') {
            //    console.log(oppNum);
            this.setState({
                oppNum: oppNum + 1
            })
        } else {
            // console.log(oppNum);
            this.setState({
                supNum: supNum + 1
            })
        }
    }

    render() {
        // 
        return (
            <div className='voteContaienr'>
                <header>
                    <h2>投票组件</h2>
                </header>
                <VoteContext.Provider value={{
                    supNum: this.state.supNum,
                    oppNum: this.state.oppNum,
                    change: this.changeNum
                }}>
                <VoteMain />
                <VoteFooter />
                </VoteContext.Provider>
            </div>
        )
    }
}
