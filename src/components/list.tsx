import React from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

const Button1 = styled.button`
    background: aqua;
    border: 1px solid #fff;
    color: #fff;
    padding: 0.5em 1em;
    cursor: pointer;
`

const Container = styled.div`
  text-align: center;
`

const list = [
    {
        name: 'React',
        id: 18,
        info: '11'
    },
    {
        name: 'Vue',
        id: 19,
        info: '22'
    },
    {
        name: 'Node',
        id: 17,
        info: '33'
    },
    {
        name: 'JavaScript',
        id: 15,
        info: '44'
    },
    {
        name: 'Note',
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
            <Button onClick={goHome}>go home</Button>
            <Button1>Test</Button1>
        </div>
    )
}

export default List;


/*
    * hook产生的原因
    * hook解决的问题
*/