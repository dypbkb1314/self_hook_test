const initState = {
    count: 2,
    name: 'tyu'
}
const Todo = (state = initState, action) => {
    switch(action.type){
        case "ADD":
            return {
                ...state,
                count: state.count+action.value
            }
        case "CHANGE":
            return {
                ...state,
                name: 'now change'
            }
        default:
            return state;
    }
}

export default Todo