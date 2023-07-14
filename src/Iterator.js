// console.log(1234569789);
class Iterator {
    constructor(params) {
        // let self = this
        this.params = params
        this.index = 0
    }
    next() {
        console.log(this.index);
        if (this.index > this.params.length - 1) {
            return {
                done: true,
                value: undefined
            }
        }
        return {
            done: false,
            value: this.params[this.index++]
        }
    }
}
let itor = new Iterator([10, 20, 30, 40])

// console.log(itor.next()); //->{value:10,done:false}
// console.log(itor.next()); //->{value:20,done:false}
// console.log(itor.next()); //->{value:30,done:false}
// console.log(itor.next()); //->{value:40,done:false}
// console.log(itor.next()); //->{value:undefined,done:true}

// 让对象也具有迭代器规范
Object.prototype[Symbol.iterator] = function () {
    let self = this
    let keys = Object.keys(self).concat(Object.getOwnPropertySymbols(self))
    let index = 0
    return {
        next() {
            if (index > keys.length - 1) {
                return {
                    done: true,
                    value: undefined
                }
            }
            return {
                done: false,
                value: self[keys[index++]]
            }
        }
    }
}

// let obj = {
//     name: 'zhufeng',
//     age: 12,
//     teacher: 'team'
// };

// for (let value of obj) {
//     console.log(value);
// }

// 生成器
// function* generator() {
//     console.log(this);
//     return 10
// }
// console.log(generator.__proto__ === );
// console.log(generator.__proto__.__proto__===Function.prototype)


// function* generator() {
//     console.log("A");
//     yield 10;
//     console.log('B');
//     yield 20;
//     console.log('C');
//     yield 30;
//     console.log('D');
//     return 100;
// }

// const iter = generator()
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function* generator() {
//     console.log("A");
//     yield 10;
//     console.log('B');
//     yield 20;
//     console.log('C');
//     yield 30;
//     console.log('D');
//     return 100;
// }

// const iter = generator()
// console.log(iter.next());//{value: 10, done: false}
// console.log(iter.return('结束'));//{value: '结束', done: true}
// // console.log(itor.throw('@throw'));
// console.log(iter.next());//{value: undefined, done: true}


// function* generator() {
//     console.log("A");
//    let first = yield 10;
//     console.log(first); //这里输出的是第二次执行next传递的参数
//    let second = yield 20;
//     console.log(second);
//     return 100;
// }

// const iter = generator()
// console.log(iter.next("123")); //{value:10,done:false}
// console.log(iter.next("first")); //{value:20:done:false}
// console.log(iter.next("second")); //{value:100:done:true}

// yeild* 后面跟着一个新的itor，后期执行到这的时候，会进入到新的generator中执行
// function* generator1() {
//     yield 10;
//     yield 20;
// }

// function* generator2() {
//     yield 10;
//     yield* generator1();
//     yield 20;
// }
// let itor2 = generator2();
// console.log(itor2.next()); //value:10  done:false
// console.log(itor2.next()); //value:10 done:false
// console.log(itor2.next()); //value:20  done:false
// console.log(itor2.next()); //value:20 done:false
// console.log(itor2.next()); //value:undefined done:true 


// 使用生成器模拟 await操作

function delay(duration = 1000) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`@@${duration}`)
        },duration)
    })
}

// 需求：串行请求，有三个请求「请求需要的时间分别是 1000/2000/3000」

function* handle() {
    const firstRe = yield delay(1000)
    console.log(firstRe);
    const secondRe = yield delay(2000)
    console.log(secondRe);
    const thirdRe = yield delay(3000)
    console.log(thirdRe);
    let fourth = yield 4000
    console.log(fourth);
    // return
}

function AsyncFunction(genarator,...params) {
    // console.log(genarator);
    let itor = genarator(...params);
    // 这里面进行递归处理迭代
    const next = x=>{
        let {value,done} = itor.next(x)
        console.log(value,done);
        if (done) return
        if (!(value instanceof Promise)) value = Promise.resolve(value);
        value.then(next);
    }
    next()
}

AsyncFunction(handle);
