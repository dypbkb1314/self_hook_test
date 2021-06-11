const http = require('http')
http.createServer((req,res)=>{
    res.setHeader('Set-Cookie', 'hty=lkj')
    res.end('hello cookie')
}).listen(8888)