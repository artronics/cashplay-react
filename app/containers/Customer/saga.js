/* eslint-disable no-underscore-dangle */
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_RECENTLY_ADDED, loadRecentlyAddedSuccessful, SAVE_NEW_CUSTOMER, } from './state';
import { createResource, getResource } from '../../utils/api';

export function* loadRecentlyAdded() {
  const customers = yield call(getResource, 'customers');
  yield put(loadRecentlyAddedSuccessful(customers._embedded.customers));
}

export function* saveNewCustomer({customer}) {
  yield call(createResource, 'customers', customer);
}

export default function* defaultSaga() {
  yield [
    takeLatest(LOAD_RECENTLY_ADDED, loadRecentlyAdded),
    takeLatest(SAVE_NEW_CUSTOMER, saveNewCustomer),
  ];
}
