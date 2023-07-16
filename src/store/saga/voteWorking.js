import { takeEvery, put , call,select } from "redux-saga/effects"
import * as actionTypes from '../actionTypes'
import delay from "./delay"

export function* asyncSup(params) {
    let state  = yield select(state => state);
    // getNum()
    console.log(state);
    // call 用来处理异步获取数据
    const res = yield call(delay)
    // put 相当于dispatch
    yield put({
        type:actionTypes.VOTE_SUP,
        payload:res
    })
}

export function* asyncOpp(params) {
    // getNum()
    console.log(params);
    // call 用来处理异步获取数据
    const res = yield call(delay)
    // put 相当于dispatch
    yield put({
        type:actionTypes.VOTE_OPP,
        payload:res
    })
}
