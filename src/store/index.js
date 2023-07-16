import {createStore,applyMiddleware} from "redux"
import reducer from "./reducer"
import createSagaMiddleware from 'redux-saga';
import saga from "./saga";
// 创建saga监听器
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
// 启动saga
sagaMiddleware.run(saga);
export default store