import { takeLatest, call, put, select } from 'redux-saga/effects';
import {post} from 'utils/api';
import { LOGIN } from './state';

export function* login() {
  const account = yield call(post, '/auth/login', {username: 'jalalhosseiny@gmail.com', password: 'secret'});
  window.localStorage.setItem('account', JSON.stringify(account));
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LOGIN, login);
}
