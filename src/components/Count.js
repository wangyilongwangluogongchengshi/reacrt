import React, { Component } from 'react'

export default class Count extends Component {
    constructor() {
        super()
        this.state = {
            num: 0
        }
    }
    add = () => {
        let { num } = this.state
        num++
        this.setState({
            num
        })
    }
    render() {
        return (
            <>
                <h2>{this.state.num}</h2>
                <button onClick={this.add}>num++</button>
            </>

        )
    }
}
/**
 * MVC模型和MVVC模式
 * 
 */
