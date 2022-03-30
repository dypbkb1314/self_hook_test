import {call, put, takeEvery, takeLatest, all} from 'redux-saga/effects';
import Api from './api'

interface ActionG{
    message: string
}

// 不允许并发处理，多个同样的action只会触发最后一次的action
function* testSagaLatest(){
    yield takeLatest('USER_TEST_LATEST', testFnc)
}

// 允许并发处理，多个同样的action都会触发该函数
function* testSagaEvery(){
    yield takeEvery('USER_TEST_EVERY', testFnc)
}

function* testFnc(action:any):Generator{
    try {
        console.log(action.value)
        // @ts-ignore
        yield call(Api.getApi, action.payload.userId);
        yield put({type: "USER_FETCH_SUCCEEDED", user: {name: 18}});
    } catch (e:any) {
        console.log(e.message)
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

const sagaList = {
    testSagaEvery,
    testSagaLatest
}

export default function* rootSaga() {
    yield all([
        testSagaEvery(),
        testSagaLatest()
    ]);
}