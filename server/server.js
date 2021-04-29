import express from 'express'
import fs from 'fs'
import React from 'react'
import path from 'path'
import ReactDomServer from 'react-dom/server'
import App from '../src/App'
const port = 8000;
const app = express()
app.use('^/$',(req,res, next)=>{
    fs.readFile(path.resolve('./build/index.html'),'utf-8',(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).send('err hava happen')
        }
        return res.send(
            data.replace('<div id="root"></div>',`<div id="root">${ReactDomServer.renderToString(<App/>)}</div>`)
        )
    })
})
app.use(express.static(path.resolve(__dirname, '..', 'build')))
app.listen(port,()=>{
    console.log(`server is starting ${port}`)
})