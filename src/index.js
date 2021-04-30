import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import axios from 'axios';
// import { renderRoutes } from 'react-router-config';
import './index.css';
import 'antd/dist/antd.css'
import reducer from './reducer';
import AuthRouter from './auth/FrontendAuth';
import { BrowserRouter, HashRouter, Switch } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile';
const store = createStore(reducer)
// import reportWebVitals from './reportWebVitals';

// axios.defaults.baseURL = 'https://www.fastmock.site/mock/33e681a4f5fdf0c95f47190f080ec3a7';
// axios.defaults.baseURL = 'https: //127.0.0.1:8888';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Authorization'] = 'tokendsfsd98sdf78dsf52ds4f545ds';
// axios.defaults.headers.common['Authorization'] = 'token' + JSON.stringify(localStorage.getItem('loginStatus'));

export const UseContext = React.createContext('');
UseContext.displayName= 'selfname';
const htk = {
  name: 'Gh',
  age: 18,
  love: 'book'
}

const renderFuc = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderFuc(
  <React.StrictMode>
    <Provider store={store}>
      {/* <UseContext.Provider value={htk}> */}
        {/* <Router /> */}
        {/* <Suspense fallback={<p>loading......</p>}> */}
          <BrowserRouter>
            {/* {renderRoutes(Router)} */}
            {/* <TextRouter/> */}
            <Switch>
            <AuthRouter />
            </Switch>
          </BrowserRouter>
        {/* </Suspense> */}
      {/* </UseContext.Provider> */}
    </Provider>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
