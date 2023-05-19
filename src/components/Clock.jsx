import React, { Component } from 'react'
import formatDate from '@/utils/formatDate'
/**
 * 时钟
 */
export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    // 开始计时
    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.tick()
        },1000)
    }
    // 清空计时器
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    render() {
        // console.log("render");
        return (
            <div className="clockContainer" style={{display:'flex',fontSize:'18px',fontWeight:'bold',color:'#f60',alignItems:'center'}}>
                <span>{formatDate()}</span>
                <h2 style={{fontSize:'14px',fontWeight:'bold',color:'rgb(214, 187, 154)',marginTop:"12px",marginLeft:'10px'}}>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}


