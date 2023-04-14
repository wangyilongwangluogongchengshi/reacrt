/**
 * 封装一个循环对象的方法
 * 原生的for in 性能较差，既可以迭代私有的，也可以迭代公有的，只能迭代“可枚举、非Symbol类型的”属性
 * 需要一个 获取对象所有的私有属性【私有的、不论是否可枚举、不论类型】
 * 
 * 解决思路：
 *      1、Object.getOwnPropertyNames(arr) -> 获取对象非Symbol类型的私有属性「无关是否可枚举」
 *      2、Object.getOwnPropertySymbols(arr) -> 获取Symbol类型的私有属性
 *         将两者拼接let keys = Object.getOwnPropertyNames(arr).concat(Object.getOwnPropertySymbols(arr));
 *      3、可以基于ES6中的Reflect.ownKeys代替上述操作「弊端：不兼容IE」
           let keys = Reflect.ownKeys(arr);
 */
function eachObj(obj, callback) {
  if (obj === null || typeof obj !== "object")
    throw new TypeError("obj is not a object");
  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");
  let keys = Reflect.ownKeys(obj);
  keys.forEach((key) => {
    let value = obj[key];
    // 每一次迭代，都把回调函数执行
    callback(value, key);
  });
}
// 将虚拟DOM变成真实DOM插入到节点中
export default function myRender(virtualDOM, container) {
  // console.log(virtualDOM,container);
  let { type, props } = virtualDOM;
  let ele = document.createElement(type);
  eachObj(props, (value, key) => {
    console.log(value, key);
    if (key === "className") {
      ele.className = value;
    } else if (key === "style") {
      eachObj(value, (sValue, key) => {
        ele.style[key] = sValue;
      });
    } else if (key === "children") {
      // 不管是不是数组都让他变成以数组进行处理
      let children = value;
      if (!Array.isArray(children)) children = [children];
      children.forEach((vdom) => {
        if (/^(string|number)$/.test(typeof vdom)) {
          ele.appendChild(document.createTextNode(vdom));
          return;
        }
        myRender(vdom,ele)
      });
    }
  });
  container.appendChild(ele);
}
