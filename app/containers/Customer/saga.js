import { call, takeLatest } from 'redux-saga/effects';
import { LOAD_RECENTLY_ADDED } from './state';
import { getResource } from '../../utils/api';

export function* loadRecentlyAdded() {
  const customers = yield call(getResource, 'customers');
}

export default function* defaultSaga() {
  yield takeLatest(LOAD_RECENTLY_ADDED, loadRecentlyAdded);
}
