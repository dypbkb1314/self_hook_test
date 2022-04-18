import { takeEvery } from 'redux-saga/effects';
import { testFnc } from "./testFnc";

// 允许并发处理，多个同样的action都会触发该函数
export function* testSagaEvery() {
    yield takeEvery('USER_TEST_EVERY', testFnc);
}
