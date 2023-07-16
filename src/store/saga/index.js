import {
    take, takeLatest, throttle, debounce,
    call, apply, fork, delay, put, select, all, cancel
} from 'redux-saga/effects';
import * as TYPES from "../actionTypes";
import { asyncSup,asyncOpp } from './voteWorking';
import demoCountWorking from './demoCountWorking';
function* working(action) {
    console.log(action);
}
/* 创建监听器，监听派发的异步任务 */
const saga = function* saga() {
   /* // 派发后，立即通知异步的working执行；
    // 但是在working没有处理完毕之前，所有其他的派发任务都不在处理！！
    while (true) {
        let action = yield take("DEMO-SAGA");
        yield working(action);
    } */

    /* // 每一次派发任务都会被执行
    yield takeEvery("DEMO-SAGA", working); */

    // 每一次派发任务都会被执行，但是会把之前没有处理完毕的干掉
    yield takeLatest("A-SUP", asyncSup);
    yield takeLatest("A-OPP", asyncOpp);
    yield takeLatest(`${TYPES.DEMO_COUNT}@SAGA@`, demoCountWorking);

    /* // 每一次派发的任务会做节流处理；在频繁触发的操作中，1000ms内，只会处理一次派发任务
    yield throttle(1000, "DEMO-SAGA", working); */

    /* // 每一次派发的任务会做防抖处理；在频繁触发的操作中，只识别最后一次派发任务进行处理
    yield debounce(1000, "DEMO-SAGA", working); */


};
export default saga;