import { takeEvery,delay, put , call,select } from "redux-saga/effects"
import * as actionTypes from '../actionTypes'
export default function* demoCountWorking(action) {
    yield delay(2000)
    yield put({
        type:actionTypes.DEMO_COUNT,
        payload:action.payload
    })
}