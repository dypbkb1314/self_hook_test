import axios from 'axios';


async function getApi() {
    try {
        const res = await axios.post(`https://www.fastmock.site/mock/33e681a4f5fdf0c95f47190f080ec3a7/user/api/self`);
        return res.data;
    } catch (e) {
        console.log(e)
    }
}
async function getApiMd(idFromBtnClick) {
    try {
        const res = await axios.get(`https://www.fastmock.site/mock/33e681a4f5fdf0c95f47190f080ec3a7/user/api/self/${idFromBtnClick}`);
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export default {
    getApi,getApiMd
}