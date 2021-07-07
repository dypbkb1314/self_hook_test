import React, {useState, useEffect} from 'react'
import { useDispatch, useStore, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Todolist() {
    const [val, setVal] = useState('')
    const [valList, setValList] = useState([])
    const dispatch = useDispatch();
    let list = useSelector(state => state.list)
    const status = useSelector(state => state.showStatus)
    const alldata = useStore()
    const history = useHistory()
    let showList =  []
    if(status === 'DONE'){
        showList = list.filter(i => i.done)
    }else if(status === 'ACTIVE'){
        showList = list.filter(i => !i.done)
    }else{
        showList = list
    }
    function addList(){
        var arr = valList
        arr.push({val, done: false})
        dispatch({type: 'ADDLIST', list: {val, done: false}})
        setValList([...arr]);
    }

    function changeStatus(index){
        valList[index].done = !valList[index].done
        setValList([...valList])
        dispatch({type: 'CHANGESTATUS', id: index})
    }

    function ckn(data) {
        console.log('test1', data)
    }
    function ckm(data) {
        console.log('test2', data)
    }

    useEffect(() => {
        console.log('val is change')
        return () => {}
    }, [val])

    useEffect(() => {
        console.log('vallist is change')
        return () => {}
    }, [valList])

    return (
        <div>
            <h1>this is a todolist page</h1>
            <div>
                <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
                <button onClick={() => addList()}>submit</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'ALL'})}>all</button>
                <button onClick={() => dispatch({type: 'DONE'})}>done</button>
                <button onClick={() => dispatch({type: 'ACTIVE'})}>active</button>
            </div>
            <ul>
                {
                    showList.length ? showList.map((item, index) => {
                        return (
                            <li key={index} className={item.done ? 'done' : 'active'} onClick={() => changeStatus(index)}>{item.val}</li>
                        )
                    }) : null
                }
            </ul>
            <button onClick={() => history.push('/home')}>go home</button>
            <button onClick={ckn}>test 1</button>
            <button onClick={() => ckm(1)}>test 2</button>
        </div>
    )
}
