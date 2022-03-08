import React, { useState, useEffect,useMemo, useCallback } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useStore, useSelector } from 'react-redux';
import Hoc from './hoc'

const listInfo = {
    name: 'Gty',
    age: 18,
    address: 'rty,ddfd,123'
}
interface selfState{
    count: number
}
interface selfParams{
    id: string
}

function Info() {
    const [ti, changeTi] = useState(2)
    const [td, changeTd] = useState(2)
    const nowId = useChangeTest(2)
    const store = useStore()
    const data = useSelector((state:selfState) => state.count)
    // const { id } = useParams<selfParams>();
    // const ij = useParams<selfParams>();
    const history:any = useHistory();
    const id = history && history.location && history.location.state.id;
    const  testMemo = useCallback(() => goBack(), [ti])
    function goBack() {
        history.push('/list')
    }
    useEffect(() => {
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
                        <p>td: {td}</p>
                        <p>nowId: {nowId}</p>
                        <p>name: {listInfo.name}</p>
                        <p>age: {listInfo.age}</p>
                        <p>address: {listInfo.address}</p>
                    </div>
                }
                twice={
                    <div>
                        <button onClick={testMemo}>go back</button>
                        <button onClick={() => changeTi(ti + 1)}>test effect</button>
                        <button onClick={() => changeTd(td + 1)}>test effect td</button>
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

function useChangeTest(inId:number) {
    return inId;
}

export default Info;