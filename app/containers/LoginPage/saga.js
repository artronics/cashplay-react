import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { LOGIN } from './state';

export function* login() {
  console.log('in saga');
  yield call(request, 'www.sdkf.com');
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LOGIN, login);
}
