'use strict';

const { Service } = require('egg');
class UserService extends Service {
    async user(){
        return {
            title: "Harry",
            content: 'Potter'
        }
    }
}

module.exports = UserService;