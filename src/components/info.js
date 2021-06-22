import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useStore, useSelector } from 'react-redux';
import Hoc from './hoc'

const listInfo = {
    name: 'Gty',
    age: 18,
    address: 'rty,ddfd,123'
}

function Info() {
    const [ti, changeTi] = useState(2)
    const nowId = useChangeTest(2)
    const store = useStore()
    const data = useSelector(state => state.count)
    console.log(store.getState(), data)
    const { id } = useParams();
    const history = useHistory();
    function goBack() {
        history.push('/list')
    }
    useEffect(() => {
        console.log(ti)
        return () => { }
    }, [ti])
    return (
        <div>
            <Hoc
                first={
                    <div>
                        <h4>Info</h4>
                        <p>id: {id}</p>
                        <p>ti: {ti}</p>
                        <p>nowId: {nowId}</p>
                        <p>name: {listInfo.name}</p>
                        <p>age: {listInfo.age}</p>
                        <p>address: {listInfo.address}</p>
                    </div>
                }
                twice={
                    <div>
                        <button onClick={goBack}>go back</button>
                        <button onClick={() => changeTi(ti + 1)}>test effect</button>
                    </div>
                }
                name="info refs"
            >
                <ul>
                    <li>难以释怀</li>
                    <li>难以释怀</li>
                    <li>难以释怀</li>
                    <li>难以释怀</li>
                </ul>
            </Hoc>
        </div>
    )
}

function useChangeTest(inId) {
    const [id, setId] = useState();
    useEffect(() => {
        setId(inId)
        return () => { }
    }, [inId])
    return id;
}

export default Info;