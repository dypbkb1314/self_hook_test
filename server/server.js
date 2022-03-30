// import express from 'express'
// import fs from 'fs'
// import React from 'react'
// import path from 'path'
// import ReactDomServer from 'react-dom/server'
// import App from '../src/App'
// const port = 8000;
// const app = express()
// app.use('^/$',(req,res, next)=>{
//     fs.readFile(path.resolve('./build/index.html'),'utf-8',(err,data)=>{
//         if(err){
//             console.log(err);
//             return res.status(500).send('err hava happen')
//         }
//         return res.send(
//             data.replace('<div id="root"></div>',`<div id="root">${ReactDomServer.renderToString(<App/>)}</div>`)
//         )
//     })
// })
// app.use(express.static(path.resolve(__dirname, '..', 'build')))
// app.listen(port,()=>{
//     console.log(`server is starting ${port}`)
// })

const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");
const json = require("koa-json");
const mysql = require("mysql");
const bodyParser = require('koa-bodyparser')
const crypto = require('crypto');

const app = new Koa();
const router = new Router();

console.log(process.env.NODE_ENV)

app.use(cors());
app.use(bodyParser());
app.use(json());
app.use(router.routes()).use(router.allowedMethods());

router.get("/_api/test", function (ctx, next) {
  // ctx.router available
  ctx.body = "ddd";
});
router.get("/_api/name", function (ctx, next) {
  console.log(next)
  console.log(ctx.request.query.id)
  // ctx.router available
  const sessionKey = "sid";
  const sid = (Math.random() * 9999999).toFixed();
  ctx.cookies.set(`${sessionKey}`, `${sid}`, {
    maxAge: 10 * 60 * 1000, // cookie有效时长
    expires: new Date("2022-06-15"), // cookie失效时间
    httpOnly: false, // 是否只用于http请求中获取
    overwrite: false, // 是否允许重写
  });
  ctx.body = {
    code: 1,
    name: "kl",
  };
  next(()=>{
    return new Promise(res => res(2))
  })
});
router.post("/_api/sql", function (ctx, next) {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456aaa",
    port: "3306",
    database: "react_login",
  });

  connection.connect();

  var addSql = "INSERT INTO users(id,username,password,created_at,updated_at) VALUES(0,?,?,?,?)";
  var addSqlParams = 
    ["李21", "8d8d9ddsfs8a", "2022-01-07 11:20:00", "2022-04-01 11:20:00"];
  //增
  connection.query(addSql, addSqlParams, function (err, result) {
    if (err) {
      console.log("[INSERT ERROR] - ", err.message);
      return;
    }
    console.log("--------------------------INSERT----------------------------");
    console.log("INSERT ID:", result);
    console.log("------------------------------------------------------------\n\n");
  });

  connection.end();
  ctx.body = {
    code: 1,
    message: 'success'
  };
});

app.listen(8888, () => console.log("listening 8888"));