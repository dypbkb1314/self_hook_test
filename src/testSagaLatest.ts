import { takeLatest } from 'redux-saga/effects';
import { testFnc } from "./testFnc";

// 不允许并发处理，多个同样的action只会触发最后一次的action
export function* testSagaLatest() {
    yield takeLatest('USER_TEST_LATEST', testFnc);
}
