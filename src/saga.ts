import {all} from 'redux-saga/effects';
import { testSagaEvery } from './testSagaEvery';
import { testSagaLatest } from './testSagaLatest';

// const sagaList = {
//     testSagaEvery,
//     testSagaLatest
// }

export default function* rootSaga() {
    yield all([
        testSagaEvery(),
        testSagaLatest()
    ]);
}