import { action } from "mobx"
import { message } from "antd"
import * as actionTypes from "./index"
import { addTask, getTaskList, completeTask, removeTask } from "../../api/taskApi"
export const voteAction = {
    sup(payload) {
        return {
            type: actionTypes.VOTE_SUP,
            payload
        }
    },
    opp(payload) {
        return {
            type: actionTypes.VOTE_OPP,
            payload
        }
    }
}

export const taskAction = {
    // 因为这里是简单的删除添加操作，信息不多可以通过手动添加信息。如果信息复杂还是需要重新获取taskList
    delete(id) {
        return async (dispatch) => {
            const result = await removeTask(id)
        }
     
    },
    finish(params) {
        return async (dispatch) => {
            await completeTask(params)
        }
       
    },
    search(params) {
        console.log(this);
        // 使用redux-thunk
        return async (dispatch) => {
            const result = await getTaskList(params.state);
            dispatch({
                type: actionTypes.TASK_SEARCH,
                payload: result.list
            })
        }
        // return{
        //     type:actionTypes.TASK_SEARCH,
        //     payload
        // }
    }
}