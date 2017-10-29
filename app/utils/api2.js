import { takeLatest, put, call, select } from 'redux-saga/effects';
import 'whatwg-fetch';
import { makeSelectAccount } from '../containers/App/selectors';
import { networkError } from '../containers/App/actions';

export const baseUrl = 'http://localhost:8080/api';
const options = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};

export function* getResource(u, page, query) {
  let url = u;
  if (page) {
    url = `${url}?&page=${page.pageIndex ? page.pageIndex : 0}&size=${page.pageSize ? page.pageSize : 10}`;
  }
  if (query) {
    url = `${url}${url.indexOf('?') !== -1 ? '' : '?'}&q=${query}`;
  }

  return yield call(get, url);
}

export function* get(u) {
  try {
    const account = yield call(getToken);
    const url = `${baseUrl + u}`;
    const getOpt = {
      ...options,
      method: 'GET',
      headers: {
        ...options.headers,
        authorization: account.token,
      },
    };

    return yield call(request, url, getOpt);
  } catch (error) {
    // TODO check for status code
    yield put(networkError());
    throw error;
  }
}

export function post(u, body) {
  const url = `${baseUrl + u}`;
  const postOpt = {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
  };
  return fetch(url, postOpt)
    .then(checkStatus)
    .then(parseJSON);
}

function request(url, opt) {
  return fetch(url, opt)
    .then(checkStatus)
    .then(parseJSON);
}

function parseJSON(response) {
  return response.json();
}

function* getToken() {
  const account = yield select(makeSelectAccount());
  // check token if not available redirect to login
  return account;
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  error.status = response.status;
  throw error;
}

