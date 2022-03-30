
import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'
import { UseContext } from './index';
import './test.css';
import Selef from './self';
import api from './api';
import {ThemeContext} from './components/theme-context';

interface SelfAppDate{
    name: string,
    surname: string,
    age: number,
    gifts:Array<string>
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
    let textref = useRef<HTMLDivElement>(null);
    const valuedd = useContext(ThemeContext);
    const [mv, setMv] = useState(0);
    var ajaxObj:any;
    console.log(valuedd, context_info)
    const {changeObj, testObj} = useChangeObj();

    const computedMemoVal = function(data:number){
        console.log(data)
    }

    const changeVal = function(){
        // setMv(mv+1)
        api.cancel()
    }

    const memoVal = React.useMemo(() => computedMemoVal(mv), [mv])

    async function getApi() {
        try {
            const res = await api.getApi();
            setPost(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    async function getApiMd(id:number) {
        try {
            const res = await api.getApiMd(id);
            setGet(res)
        } catch (e) {
            console.log(e)
        }
        // var ajaxobj;
        // ajaxObj = new XMLHttpRequest();
        // ajaxObj.open('get', 'https://www.fastmock.site/mock/33e681a4f5fdf0c95f47190f080ec3a7/user/api/self/2');
        // ajaxObj.send();
        // ajaxObj.onreadystatechange = function () {
        //     // 为了保证 数据 完整返回，我们一般会判断 两个值
        //     if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
        //         // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
        //         // 5.在注册的事件中 获取 返回的 内容 并修改页面的显示
        //         console.log('数据返回成功');
        //         // 数据是保存在 异步对象的 属性中
        //         console.log(ajaxObj.responseText);
        //     }
        // }
    }
    async function testproxy() {
        try {
            const res = await api.testproxy();
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    async function testsql() {
        try {
            const res = await api.testsql();
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    async function getList(){
        try{
            await axios.get('/_api/name');
        }catch(e){
            console.log(e)
            console.log(e)
        }
    }

    function focus(){
        if(inptref.current){
            inptref.current.focus()
        }
    }

    function testSagaLatest(){
        dispatch({type: "USER_TEST_LATEST", value: "hello latest 1"})
    }

    function testSagaEvery(){
        dispatch({type: "USER_TEST_EVERY", value: "hello everyt 1"})
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
            <p>{`${testObj.name} ${testObj.surname} is ${testObj.age}`}</p>
            <button onClick={() => changeObj()} >change obj</button>
            <span><a href="#">rfgt</a></span>
            <input {...name} readOnly/>
            <input {...surname} readOnly/>
            <span>{width}</span>
            <button onClick={() => changeVal()}>set memo val</button>
            <div className='b'>
                <div className='aa'></div>
                <div className='aa'></div>
                <div className='aa'></div>
                <div className='aa'></div>
            </div>
            <button onClick={() => dispatch({type: "ADD", value: 3})}>redux count</button>
            <button onClick={() => dispatch({type: "CHANGE", value: "hello Jk"})}>redux name</button>
            <button onClick={() => testSagaLatest()}>redux sage latest</button>
            <button onClick={() => testSagaEvery()}>redux saga every</button>
            {/* USER_TEST_LATEST */}
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
            <div ref={textref} className="textbox"></div>
            <input type="text" ref={inptref}/>
            <button onClick={focus}>ref test</button>
            <button onClick={printWidth}>test width</button>
            <button onClick={() => {getApiMd(2)}}>接口测试post</button>
            <button onClick={() => {getApi()}}>接口测试get</button>
            <button onClick={() => {testproxy()}}>接口测试proxy</button>
            <button onClick={() => {testsql()}}>接口测试sql</button>
            <button onClick={() => history.push('/list')}>go list</button>
            <button onClick={getList}>get List btn</button>
            <button onClick={() => history.push('/antdTest')}>got antd</button>
            <button onClick={() => history.push('/templure')}>go templure</button>
            <button onClick={() => history.push('/todolist')}>go todolist</button>
            <button onClick={() => history.push('/router_test')}>go routerTest</button>
        </div>
    )
}

function useChangeObj(){
    const [testObj, setTestObj] = useState<SelfAppDate>({name: 'Harry', surname: 'Potter', age: 18, gifts: ['gift1']})
    let changeObj  = function(){
        setTestObj({
            ...testObj,
            age: Math.floor(Math.random() * 100)
        });
    }
    
    return {
        testObj,
        changeObj
    };
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



