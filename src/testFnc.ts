import { call, put } from 'redux-saga/effects';
import Api from './api';


export function* testFnc(action: any): Generator {
    try {
        console.log(action.value);
        // @ts-ignore
        yield call(Api.getApi, action.value);
        yield put({ type: "USER_FETCH_SUCCEEDED", user: { name: 18 } });
    } catch (e: any) {
        console.log(e.message);
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}
