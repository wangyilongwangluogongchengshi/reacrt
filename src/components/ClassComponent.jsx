import React, { Component } from 'react'
import Count from './Count'
export default class ClassComponent extends Component {
 state={
    title:"计数器"
 }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                title:"大计数器"
            })
        }}>change</button>
        <Count title={this.state.title}/>
      </div>
    )
  }
}
