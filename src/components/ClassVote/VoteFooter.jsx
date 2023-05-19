import React, { Component } from 'react'
import { Button } from 'antd';
import PropTypes from "prop-types";
import "./index.less"
import VoteContext from "./voteContext"
const types = {
  supNum:PropTypes.number,
  oppNum:PropTypes.number,
  change:PropTypes.func
}
export default class VoteFooter extends Component {
  static contextType = VoteContext
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button type="primary" onClick={()=>{
              this.context.change('sup')
            }}>支持</Button>
            <Button type="primary" danger onClick={()=>{
              this.context.change('opp')
            }}>反对</Button>
        </div>
    )
  }
}
