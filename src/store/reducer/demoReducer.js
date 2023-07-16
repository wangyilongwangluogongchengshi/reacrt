import * as TYPES from '../actionTypes';
let initial = {
    num: 10,
};
export default function demoReducer(state = initial, { type, payload }) {
    switch (type) {
        case TYPES.DEMO_COUNT:
            return {
                num: state.num += payload
            };
        default:
            return { ...state }
    }
}