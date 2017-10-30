/* eslint-disable no-underscore-dangle */
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_RECENTLY_ADDED, loadRecentlyAddedSuccessful, } from './state';
import { getResource } from '../../utils/api';

export function* loadRecentlyAdded() {
  const customers = yield call(getResource, 'customers');
  yield put(loadRecentlyAddedSuccessful(customers._embedded.customers));
}

export default function* defaultSaga() {
  yield takeLatest(LOAD_RECENTLY_ADDED, loadRecentlyAdded);
}
