
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { UseContext } from './index';
import './test.css';
import Selef from './self';
import api from './api'

function App() {
    const history = useHistory();
    console.log(history)
    const dispatch = useDispatch()
    const store =useStore()
    console.log(store.getState())
    let dared = useSelector(state => state.count)
    const name = useHandleName('Harry');
    const surname = useHandleName('Potter');
    const width = useWindowWidth();
    const {love} = useContext(UseContext)
    const [selfData, setPost] = useState()
    const [selfDataGet, setGet] = useState()
    const [nodeList, setNodeList] = useState()
    const [idFromBtnClick, setIdFromBtnClick] = useState('1')
    useDocumentTitle(name.value + ' ' + surname.value);

    useEffect(() => {
        if (idFromBtnClick === 2) {
            async function getApi() {
                try {
                    const res = await api.getApi();
                    console.log(res)
                    setPost(res.data)
                } catch (e) {
                    console.log(e)
                }
            }
            getApi()
        } else if (idFromBtnClick === 3) {
            async function getApiMd() {
                try {
                    const res = await api.getApiMd(idFromBtnClick);
                    setGet(res)
                } catch (e) {
                    console.log(e)
                }
            }
            getApiMd()
        }
    }, [idFromBtnClick])

    async function getList(){
        try{
            const data = await axios.get('http://localhost:8888/name');
            // setNodeList(data.data)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className="box">
            <Selef/>
            <input {...name} />
            <input {...surname} />
            <span>{width}</span>
            <span>{love}</span>
            <div className='b'>
                <div className='aa'></div>
                <div className='aa'></div>
                <div className='aa'></div>
                <div className='aa'></div>
            </div>
            <button onClick={() => dispatch({type: "ADD", value: 3})}>redux count</button>
            <button onClick={() => dispatch({type: "CHANGE"})}>redux name</button>
            <span>{dared}</span>
            {
                selfData ? (
                    <div>
                        <p>name: {selfData.name}</p>
                        <p>surname: {selfData.surname}</p>
                        <p>age: {selfData.age}</p>
                        {
                            selfData.gifts.length && selfData.gifts.map((j, index) => {
                                return (
                                    <p key={index}>{j}</p>
                                )
                            })
                        }
                    </div>
                ) : null
            }
            {
                selfDataGet && (
                    <div>
                        <p>{selfDataGet.name}</p>
                        <p>{selfDataGet.message}</p>
                    </div>
                )
            }
            
            {
                nodeList && nodeList.length ? (
                    <ul className="mg0">
                        {
                            nodeList.map((i, index) => {
                                return (
                                    <li key={index}>{i}</li>         
                                )
                            })
                        }
                    </ul>
                ): null
            }
            <button onClick={() => {setIdFromBtnClick(2)}}>接口测试post</button>
            <button onClick={() => {setIdFromBtnClick(3)}}>接口测试get</button>
            <button onClick={() => history.push('/list')}>go list</button>
            <button onClick={getList}>get List btn</button>
            <button onClick={() => history.push('/antdTest')}>got antd</button>
            <button onClick={() => history.push('/templure')}>go templure</button>
        </div>
    )
}


function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })
    return width;
}

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title
    })
}

function useHandleName(initName) {
    const [value, setValue] = useState(initName)
    function onChangeValue(e) {
        setValue(e.target.value)
    }
    return {
        value,
        onChange: onChangeValue,
    }
}

// App.PropTypes = {
//     selfDataGet: PropTypes.string.isRequired,
// }

let ShowApp = React.memo(App)

export default ShowApp;



