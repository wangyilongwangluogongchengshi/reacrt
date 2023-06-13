const initialState = []


export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "TASK_SEARCH":
            return payload
        default:
            return state
    }
}
