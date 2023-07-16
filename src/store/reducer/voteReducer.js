import * as TYPES from '../actionTypes';
let initial = {
    supNum: 10,
    oppNum: 5
};
export default function voteReducer(state = initial, { type, payload }) {
    switch (type) {
        case TYPES.VOTE_OPP:
            return {
                ...state,
                oppNum: state.oppNum+=payload
            };
        case TYPES.VOTE_SUP:
            return {
                ...state,
                supNum: state.supNum+=payload
            };
        default:
            return{...state}
    }
}