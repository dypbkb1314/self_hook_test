'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    await ctx.render('index.html',{
         title: 'Test'
    })
  }
  async test() {
    const { ctx } = this;
    ctx.body = 'test';
  }
}

module.exports = HomeController;
