import { action } from "mobx"
import * as actionTypes from "./index"
export const voteAction = {
    sup(payload){
        return{
            type:actionTypes.VOTE_SUP,
            payload
        }
    },
    opp(payload){
        return{
            type:actionTypes.VOTE_OPP,
            payload
        }
    }
}