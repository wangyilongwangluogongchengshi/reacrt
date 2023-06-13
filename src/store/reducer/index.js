import { combineReducers } from "redux";
import stuListReducer from "./stuListReducer";
import voteReducer from "./voteReducer";
import task from "./taskResucer";
export default combineReducers({
    stuListReducer,
    voteReducer,
    task
})
