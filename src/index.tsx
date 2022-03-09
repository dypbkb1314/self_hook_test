/*
 * @Author: your name
 * @Date: 2021-08-23 10:16:14
 * @LastEditTime: 2022-01-21 14:25:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /reactht/src/index.tsx
 */
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import axios from "axios";
import "./index.css";
import "antd/dist/antd.css";
import reducer from "./reducer";
import AuthRouter from "./auth/FrontendAuth";
import { BrowserRouter, Switch } from "react-router-dom";
import "antd-mobile/dist/antd-mobile";
import { selfState, selfAction } from "./reducer";
import "./setProxy";
const store: Store<selfState, selfAction> = createStore(reducer);
// import reportWebVitals from './reportWebVitals';

// axios.defaults.baseURL = 'https://www.fastmock.site/mock/33e681a4f5fdf0c95f47190f080ec3a7';
axios.defaults.baseURL = "http://localhost:8888";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common["Authorization"] = "tokendsfsd98sdf78dsf52ds4f545ds";
// axios.defaults.headers.common['Authorization'] = 'token' + JSON.stringify(localStorage.getItem('loginStatus'));

const htk = {
  name: "Gh",
  age: 18,
  love: "book",
};
export const UseContext = React.createContext(htk);

const renderFuc = ReactDOM.render;
// const renderFuc = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderFuc(
  <React.StrictMode>
    <Provider store={store}>
      {/* <UseContext.Provider value={htk}> */}
      {/* <Router /> */}
      <Suspense fallback={<p>loading......</p>}>
        <BrowserRouter>
          {/* {renderRoutes(Router)} */}
          {/* <TextRouter/> */}
          <Switch>
            <AuthRouter />
          </Switch>
        </BrowserRouter>
      </Suspense>
      {/* </UseContext.Provider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
