import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        n: 0
    }
    changeNum = (type) => {
        let { n } = this.state
        if (type === 'dec') {
            if (n > 0) {
                this.setState({
                    n: n - 1
                })
            }
        } else {
            this.setState({
                n: n + 1
            })
            console.log(this.state);
        }
    }
    UNSAFE_componentWillMount() {
        console.log("componentWillMount");
    }
    componentDidMount() {
        console.log('componentDidMount,挂载完毕');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState);
        return true
    }
    componentDidUpdate() {
        console.log("更新完成");
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps:', this.props, nextProps);
      }

    render() {
        console.log("render_渲染");
        // console.log(this.props);
        return (
            <>
                <h1>{this.props.title}</h1>
                <div style={{ display: 'flex' }}>
                    <button onClick={() => { this.changeNum('dec') }}>-</button>
                    <h1 style={{ margin: '0 20px' }}>
                        {this.state.n}
                    </h1>
                    <button onClick={() => { this.changeNum('inc') }}>+</button>
                </div>
            </>

        )
    }
}

