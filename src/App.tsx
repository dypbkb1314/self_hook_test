
import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'
import { UseContext } from './index';
import './test.css';
import Selef from './self';
import api from './api';

interface SelfAppDate{
    name: string,
    surname: string,
    age: number,
    gifts:[]
}

interface SelfSelect{
    count: number
}

interface SelfDataGet{
    name: string,
    message: string
}

function App() {
    const history = useHistory();
    console.log(history)
    const dispatch = useDispatch()
    let dared = useSelector((state:SelfSelect) => state.count)
    const name = useHandleName('Harry');
    const surname = useHandleName('Potter');
    const width = useWindowWidth();
    const context_info = useContext(UseContext)
    const [selfData, setPost] = useState<SelfAppDate>({name: '', surname: '', age: 1, gifts: []})
    const [selfDataGet, setGet] = useState<SelfDataGet>({name: '', message: ''})
    const [nodeList, setNodeList] = useState([])
    const [idFromBtnClick, setIdFromBtnClick] = useState<number>(1)
    useDocumentTitle(name.value + ' ' + surname.value);
    const inptref = useRef<HTMLInputElement>(null)
    let textref = useRef<HTMLDivElement>(null)

    async function getApi() {
        try {
            const res = await api.getApi();
            console.log(res)
            setPost(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    async function getApiMd() {
        try {
            const res = await api.getApiMd(idFromBtnClick);
            setGet(res)
        } catch (e) {
            console.log(e)
        }
    }
    async function testproxy() {
        try {
            const res = await api.testproxy();
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }
    // console.log(textref.current.innerWidth, textref.current.offsetWidth, textref.current.clientWidth)
    useEffect(() => {
        if (idFromBtnClick === 2) {
            getApi()
        } else if (idFromBtnClick === 3) {
            
            getApiMd()
        }else if(idFromBtnClick === 4){
            
            testproxy()
        }
    }, [idFromBtnClick])

    async function getList(){
        try{
            await axios.get('/_api/name');
        }catch(e){
            console.log(e)
            console.log(e)
        }
    }

    function focux(){
        if(inptref.current){
            inptref.current.focus()
        }
    }

    function printWidth(){
        const sg = textref.current;
        if(sg){
            console.log('offsetwidth', sg.offsetWidth)
            console.log('clientwidth', sg.clientWidth)
            console.log('scrollwidth', sg.scrollWidth)
            console.log('scrolly', sg.scrollTop)
        }
    }

    return (
        <div className="box">
            <Selef/>
            <span><a href="#">rfgt</a></span>
            <input {...name} readOnly/>
            <input {...surname} readOnly/>
            <span>{width}</span>
            {/* <span>{love}</span> */}
            <div className='b'>
                <div className='aa'></div>
                <div className='aa'></div>
                <div className='aa'></div>
                <div className='aa'></div>
            </div>
            <button onClick={() => dispatch({type: "ADD", value: 3})}>redux count</button>
            <button onClick={() => dispatch({type: "CHANGE", value: "hello Jk"})}>redux name</button>
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
            <button onClick={() => history.push('/todolist')}>go todolist</button>
            <button onClick={() => history.push('/router_test')}>go routerTest</button>
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

function useDocumentTitle(title:string) {
    useEffect(() => {
        document.title = title
    })
}

function useHandleName(initName: string) {
    const [value, setValue] = useState(initName)
    return {
        value,
    }
}

App.propTypes = {
    // selfDataGet: PropTypes.string.isRequired,
    // getList: PropTypes.func.isRequired
}

let ShowApp = React.memo(App)

export default ShowApp;



