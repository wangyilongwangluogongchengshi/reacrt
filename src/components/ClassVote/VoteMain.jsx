import React, { Component } from 'react'
import PropTypes from "prop-types";
import VoteContext from "./voteContext"
import "./index.less"
const types = {
  supNum: PropTypes.number,
  oppNum: PropTypes.number,
  change: PropTypes.func
}

export default class VoteMain extends Component {
  // static contextType = VoteContext//可以这样使用
  render() {
    // console.log(this.context);
    return (
      <VoteContext.Consumer>
        {
          context => {
            let { supNum, oppNum } = context;
            return <div className='voteMain'>
              <h4>支持人数：{supNum}</h4>
              <h4>反对人数：{oppNum}</h4>
              <h4>总票数：{supNum + oppNum}</h4>
            </div>
          }
        }

        {/* <h4>支持人数：{this.context.supNum}</h4>
        <h4>反对人数：{this.context.oppNum}</h4>
        <h4>总票数：{this.context.supNum + this.context.oppNum}</h4> */}
      </VoteContext.Consumer>

    )
  }
}
