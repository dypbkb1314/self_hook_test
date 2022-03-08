import axios from 'axios';

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
        const res = await axios.post(`https://www.fastmock.site/mock/33e681a4f5fdf0c95f47190f080ec3a7/user/api/self`);
        return res.data;
    } catch (e) {
        console.log(e)
    }
}
async function getApiMd(idFromBtnClick:number) {
    try {
        const res = await axios.get(`https://www.fastmock.site/mock/33e681a4f5fdf0c95f47190f080ec3a7/user/api/self/${idFromBtnClick}`);
        return res.data
    } catch (e) {
        console.log(e)
    }
}

async function testproxy(){
    try{
        const res = await axios.get('/_api/name');
        return res;
    }catch(e){
        console.log(e)
    }
}


const apiList ={
    getApi,
    getApiMd,
    testproxy,
}

export default apiList;