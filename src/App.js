
import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'
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
    const context_info = useContext(UseContext)
    const [selfData, setPost] = useState()
    const [selfDataGet, setGet] = useState()
    const [nodeList, setNodeList] = useState()
    const [idFromBtnClick, setIdFromBtnClick] = useState('1')
    useDocumentTitle(name.value + ' ' + surname.value);
    const inptref = useRef(null)
    let textref = useRef(null)
    
    // console.log(textref.current.innerWidth, textref.current.offsetWidth, textref.current.clientWidth)
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
        }else if(idFromBtnClick === 4){
            async function testproxy() {
                try {
                    const res = await api.testproxy();
                    console.log(res)
                } catch (e) {
                    console.log(e)
                }
            }
            testproxy()
        }
    }, [idFromBtnClick])

    async function getList(){
        console.log(111)
        try{
            await axios.get('/_api/name');
        }catch(e){
            console.log(e)
            console.log(e)
        }
    }

    function focux(){
        inptref.current.focus()
    }

    function printWidth(e){
        const sg = textref.current;
        console.log('offsetwidth', sg.offsetWidth)
        console.log('clientwidth', sg.clientWidth)
        console.log('scrollwidth', sg.scrollWidth)
        console.log('scrolly', sg.scrollTop)
    }

    return (
        <div className="box">
            <Selef/>
            <span><a href="#">rfgt</a></span>
            <input {...name} />
            <input {...surname} />
            <span>{width}</span>
            {/* <span>{love}</span> */}
            <div className='b'>
                <div className='aa'></div>
                <div className='aa'></div>
                <div className='aa'></div>
                <div className='aa'></div>
            </div>
            <button onClick={() => dispatch({type: "ADD", value: 3})}>redux count</button>
            <button onClick={() => dispatch({type: "CHANGE"})}>redux name</button>
            <span>{dared}</span>
            {React.createElement("h1", null, "this is react element")}
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
            {/* testproxy */}
            <div ref={textref} className="textbox"></div>
            <input type="text" ref={inptref}/>
            <button onClick={focux}>ref test</button>
            <button onClick={printWidth}>test width</button>
            <button onClick={() => {setIdFromBtnClick(2)}}>接口测试post</button>
            <button onClick={() => {setIdFromBtnClick(3)}}>接口测试get</button>
            <button onClick={() => {setIdFromBtnClick(4)}}>接口测试proxy</button>
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

App.propTypes = {
    // selfDataGet: PropTypes.string.isRequired,
    // getList: PropTypes.func.isRequired
}

let ShowApp = React.memo(App)

export default ShowApp;



