import React from 'react';
import ReactDOM from 'react-dom/client';
import Vote from "./components/ClassVote"
import "./index.less"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Vote/>
  </>
);

// class Person {
//   constructor(name,age) {
//     this.name = name
//     this.age = age
//   }
//   sum(){  //给原型上加方法 ====等价于Person.prototype = sum（）{}
//     console.log(this.age);
//   }
//   // 把类当作对象添加静态私有属性  相当于 Perons.sex = '男
//   static sex = '男'
//   static test(){
//     console.log(123456);
//   }
// }
// console.log(Person.__proto__);
// const person1 = new Person("张三",18)
// person1.height = 180
// console.log(person1);

