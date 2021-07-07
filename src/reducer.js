const initState = {
    count: 2,
    name: 'tyu',
    list: [],
    showStatus: 'ALL'
}
const Todo = (state = initState, action) => {
    console.log(state)
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                count: state.count + action.value
            }
        case "CHANGE":
            return {
                ...state,
                name: 'now change'
            }
        case "ADDLIST":
            const list = [...state.list, action.list||{}];
            return {
                ...state,
                list: [...state.list, action.list]
            }
        case "ALL":
            return {
                ...state,
                showStatus: 'ALL'
            }
        case "DONE":
            return {
                ...state,
                showStatus: 'DONE'
            }
        case "ACTIVE":
            return {
                ...state,
                showStatus: 'ACTIVE'
            }
        case "CHANGESTATUS":
            const arr = state.list;
            arr[action.id].done = !arr[action.id].done
            return {
                ...state,
                list: arr
            }
        default:
            return state;
    }
}

export default Todo