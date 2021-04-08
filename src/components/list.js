import React from 'react';
import { useHistory } from 'react-router-dom'

const list = [
    {
        name: 'Asd',
        id: 18,
    },
    {
        name: 'Sdf',
        id: 19,
    },
    {
        name: 'Dfg',
        id: 17,
    },
    {
        name: 'Fgh',
        id: 15,
    },
    {
        name: 'Ghj',
        id: 13,
    },
]

function List() {
    const history = useHistory();

    function goInfo(props){
        history.push(`/info/${props}`)
    }
    function goHome(){
        history.push('/')
    }
    return (
        <div>
            <h4>List</h4>
            <ul>
                {
                    list.map((i, index) => {
                        return (
                            <li key={index} onClick={() => goInfo(i.id)}>{i.name}</li>
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