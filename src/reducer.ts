/*
 * @Author: your name
 * @Date: 2021-06-29 17:56:19
 * @LastEditTime: 2022-01-21 14:22:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /reactht/src/reducer.ts
 */
const initState:selfState = {
    count: 2,
    name: 'tyu',
    list: [],
    showStatus: 'ALL',
}
const initAction:selfAction = {
    type: 'ADD',
    value: '2',
    list: [],
    id: 3
}
export interface selfState {
    count: number,
    name: string,
    list: any,
    showStatus: string
}
export interface selfAction {
    type: string,
    value: string,
    list: any,
    id: number
}
function self_reducer(state:any = initState, action:any = initAction){
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                count: state.count + action.value
            }
        case "CHANGE":
            return {
                ...state,
                name: action.value
            }
        case "ADDLIST":
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
            (arr as any)[action.id].done = !(arr as any)[action.id].done
            return {
                ...state,
                list: arr
            }
        default:
            return state
    }
}

export default self_reducer