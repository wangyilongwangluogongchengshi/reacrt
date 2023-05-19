import React, { PureComponent } from 'react'
function isObject(obj) {
  if (obj.constructor === Object) {
    return true
  } else {
    return false
  }
}
function shallowEqual(objA, objB) {
  if (!isObject(objA) || !isObject(objB)) return false;
  if (objA === objB) return true;
  // 比较数量，数量不同，认为不同
  // 先比较成员的数量
  let keysA = Reflect.ownKeys(objA),
    keysB = Reflect.ownKeys(objB);
  if (keysA.length !== keysB.length) return false;
  // 数量一致注意比较
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    // 如果不存在该属性或者，两者值不相等认为不同
    if (!objB.hasOwnProperty(key) || !Object.is(objA[key], objB[key])) {
      return false
    }

  }
  return true
}
export default class PureComponentTest extends React.Component {
  state = {
    arr: [1, 2, 3]
  }
  shouldComponentUpdate(nextProps,nextState){
    const {props,state} = this
    return !shallowEqual(props, nextProps) || !shallowEqual(state, nextState);
  }
  render() {
    let { arr } = this.state
    return (
      <div>
        {arr.map((item, index) => {
          return <span
            style={{ display: 'inline-block', padding: "10px 20px", backgroundColor: "red", margin: "0 10px" }}
            key={index}>{item}</span>
        })}
        <button onClick={() => {
          arr.push(arr[arr.length - 1] + 1)
          console.log(arr);
          this.setState(
            { arr: arr }
          )
        }}>增加</button>
      </div>
    )
  }
}
