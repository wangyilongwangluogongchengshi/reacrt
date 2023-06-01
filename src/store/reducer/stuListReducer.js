const initialState = 
    [
        { id: 0, name: "张三", sex: '男', grade: 0 },
        { id: 2, name: "张儿", sex: '女', grade: 3 },
        { id: 3, name: "张三", sex: '未知', grade: 2 },
        { id: 4, name: "张死", sex: '女', grade: 1 },
        { id: 5, name: "张五", sex: '男', grade: 6 },
        { id: 6, name: "张刘", sex: '男', grade: 5 },
    ]


export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "ADD_Stu":
            return state.map((item) => {
                return item.id === payload.id ? { ...item, ...payload } : item
            })
        case "DC_Stu":
            return state.map((item) => {
                return item.id === payload.id ? { ...item, ...payload } : item
            })

        default:
            return state
    }
}
