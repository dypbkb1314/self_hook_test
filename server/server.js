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

const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const json = require('koa-json')

const app = new Koa();
const router = new Router();
app.use(cors())
router.get('/_api/test', function (ctx, next) {
  // ctx.router available
  ctx.body = 'ddd'
});
router.get('/_api/name', function (ctx, next) {
  // ctx.router available
  const sessionKey = 'sid'
  const sid = (Math.random() * 9999999).toFixed()
  ctx.cookies.set(`${sessionKey}`, `${sid}`, {
    maxAge: 10 * 60 * 1000, // cookie有效时长
    expires: new Date('2022-06-15'),  // cookie失效时间
    httpOnly: false,  // 是否只用于http请求中获取
    overwrite: false  // 是否允许重写
  })
  ctx.body = {
    code: 1,
    name: 'kl'
  }
});

app.use(json());
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8888, () => console.log('listening 8888'))


// const assert = require('assert').strict;
// assert.notEqual(123,123)

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question(`你叫什么名字?`, name => {
//   console.log(`你好 ${name}!`)
//   readline.close()
// })

// const inquirer = require('inquirer')

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "你叫什么名字?"
//   }
// ]

// inquirer.prompt(questions).then(answers => {
//   console.log(`你好 ${answers['name']}!`)
// })