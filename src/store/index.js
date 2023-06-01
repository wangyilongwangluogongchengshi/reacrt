import { createStore } from "redux";
import reducer from "./reducer";
// const initialState = {
//     supNum: 1,
//     oppNum: 2
// }

// function reducer(state = initialState, { type, payload }){
//     switch (type) {
//         case 'VOTE_SUP':
//             return { ...state, supNum:state.supNum+=1 }
//         case 'VOTE_OPP':
//             return { ...state, oppNum:state.oppNum+=1 }
//         default:
//             return state
//     }
// }

/* 管理员：修改STORE容器中的公共状态 */
// let initial = {
//     supNum: 10,
//     oppNum: 5,
//     userList:[
//         {id:0,name:"张三",sex:'男',grade:0},
//         {id:2,name:"张儿",sex:'女',grade:3},
//         {id:3,name:"张三",sex:'未知',grade:2},
//         {id:4,name:"张死",sex:'女',grade:1},
//         {id:5,name:"张五",sex:'男',grade:6},
//         {id:6,name:"张刘",sex:'男',grade:5},   
//     ]
// };


const store = createStore(reducer)

export default store