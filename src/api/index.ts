import axios from 'axios';
var CancelToken = axios.CancelToken;
var cancelFlag:any;

axios.interceptors.request.use(function(config){
    return config;
}, function(err){
    return Promise.reject(err)
})

axios.interceptors.response.use(function(config){
    return config
}, function(err){
    return Promise.reject(err)
})


async function getApi() {
    try {
        const res = await axios.post(`https://www.fastmock.site/mock/33e681a4f5fdf0c95f47190f080ec3a7/user/api/self`,{},{
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                cancelFlag = c;
            })
        });
        return res.data;
    } catch (e) {
        console.log(e)
    }
}
async function getApiMd(idFromBtnClick:number) {
    try {
        console.log('test')
        const res = await axios.get(`https://www.fastmock.site/mock/33e681a4f5fdf0c95f47190f080ec3a7/user/api/self/${idFromBtnClick}`,{
            cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                cancelFlag = c;
            })
        });
        return res.data
    } catch (e) {
        console.log(e)
    }
}

function cancel(){
    cancelFlag();
}

async function testproxy(){
    try{
        let testGet = 'fff'
        const res = await axios.get(`/_api/name?id=${testGet}`);
        return res;
    }catch(e){
        console.log(e)
    }
}

async function testsql(){
    try{
        const res = await axios.post('/_api/sql', {name: 'ddd', password: 'dsfsd4sf45ds54'});
        return res;
    }catch(e){
        console.log(e)
    }
}

const apiList ={
    getApi,
    getApiMd,
    testproxy,
    cancel,
    testsql
}

export default apiList;