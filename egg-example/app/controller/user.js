'use strict';

const Controller = require('egg').Controller;

class UserContriller extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'user';
    }
    async userInfo(){
        const {ctx} = this;
        const { username } = ctx.query;
        ctx.body = username;
    }
    async getId() {
        const { ctx } = this;
        const { id } = ctx.params;
        ctx.body = id;
    }
    async add(){
        const { ctx } = this;
        const { title, content } = await ctx.service.user.user();
        ctx.body = {
            title,
            content,
        }
        
    }
}

module.exports = UserContriller;
