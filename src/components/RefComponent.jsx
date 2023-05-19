import React, { Component } from 'react'

export default class RefComponent extends Component {
    box3 = React.createRef()
    componentDidMount(){
        console.log(this.refs.titleBox);//通过字符串进行获取
        console.log(this.box2);
        console.log(this.box3.current);
    }
   
    render() {
        return (
            <div>
                RefComponent
                <h2 className="title" ref="titleBox">温馨提示</h2>
                <h2 className="title" ref={(e)=>{this.box2 = e}}>温馨提示2</h2>
                <h2 className="title" ref={this.box3}>温馨提示3</h2>
            </div>
        )
    }
}
