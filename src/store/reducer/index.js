import { combineReducers } from "redux";
import demoReducer from "./demoReducer"
import voteReducer from "./voteReducer";
const reducer = combineReducers({
    demo:demoReducer,
    vote:voteReducer
})

export default reducer