const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  // /api 表示代理路径
  // target 表示目标服务器的地址
  app.use( proxy('/lists', {'^/lists': 'http://localhost:8080/' } ))
}