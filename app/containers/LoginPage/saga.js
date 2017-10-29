import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { post } from 'utils/api';
import { LOGIN } from './state';
import { account as accountAction } from '../App/state';

export function* login() {
  const account = yield call(post, '/auth/login', {username: 'jalalhosseiny@gmail.com', password: 'secret'});
  window.localStorage.setItem('account', JSON.stringify(account));
  yield put(accountAction(account));
  yield put(push('/app'));
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LOGIN, login);
}
