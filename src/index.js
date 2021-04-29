import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import { renderRoutes } from 'react-router-config';
import './index.css';
import 'antd/dist/antd.css'
import reducer from './reducer';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile';
// import './components/login'
const store = createStore(reducer)
// import reportWebVitals from './reportWebVitals';

export const UseContext = React.createContext('');
UseContext.displayName= 'selfname';
const htk = {
  name: 'Gh',
  age: 18,
  love: 'book'
}
ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <UseContext.Provider value={htk}>
        {/* <Router /> */}
        <Suspense fallback={<p>loading......</p>}>
          <BrowserRouter>
            {renderRoutes(Router)}
          </BrowserRouter>
        </Suspense>
      </UseContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
