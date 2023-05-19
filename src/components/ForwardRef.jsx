import React, { Component } from 'react'

function Child1(props,ref) {
    return (
        <div>
            <h1 ref={ref}>Child1</h1>
        </div>
    )
}

const FChild1 = React.forwardRef(Child1)

class Child2 extends Component {
    h2 = React.createRef()
    render() {
        return (
            <div>
                <h2 ref={this.h2}>Child2</h2>
            </div>
        )
    }
}



export default class ForwardRef extends Component {
    componentDidMount(){
        console.log(this.Child1);
        console.log(this.child2.h2.current);
    }

    render() {
        return (
            <div>
                <FChild1 ref={(e)=>this.Child1 = e} />
                <Child2 ref={(e)=>this.child2 = e} />
            </div>
        )
    }
}
