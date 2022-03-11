import React from 'react';
import { useHistory } from 'react-router-dom'

const list = [
    {
        name: 'Asd',
        id: 18,
        info: '11'
    },
    {
        name: 'Sdf',
        id: 19,
        info: '22'
    },
    {
        name: 'Dfg',
        id: 17,
        info: '33'
    },
    {
        name: 'Fgh',
        id: 15,
        info: '44'
    },
    {
        name: 'Ghj',
        id: 13,
        info: '55'
    },
]

function List() {
    const history = useHistory();
    const [lists, setLists] = React.useState(list);

    function goInfo(props:number){
        history.push({
            pathname: '/info',
            state:{
                id: props
            }
        })
    }

    function goHome(){
        history.push('/')
    }

    function changeInfo(key:number, e: React.ChangeEvent<HTMLInputElement>){
        lists.map(i => {
            if(i.id === key){
                i.info = e.target.value
            }
        });
        setLists([...lists])
    }

    return (
        <div>
            <h4>List</h4>
            <ul>
                {
                    list.map((i, index) => {
                        return (
                            <li key={index}>
                                {i.name}
                                <input type="text" value={i.info} onChange={(e) => changeInfo(i.id, e)} />
                                <button onClick={() => goInfo(i.id)}>got list</button>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={goHome}>go home</button>
        </div>
    )
}

export default List;


/*
    * hook产生的原因
    * hook解决的问题
*/