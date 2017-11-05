import request from 'utils/request';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { networkError } from 'containers/App/state';
import { makeSelectAccount } from 'containers/App/selectors';

const isHttps = window.location.protocol === 'https:';
export const baseUrl = isHttps ? 'https://api.pawnfield.co.u/api' : 'http://localhost:8080/api';

const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

function* checkAuth() {
  const token = yield call(getToken);
  if (!token) {
    yield put(push('/login'));
    throw new Error('no token');
  } else {
    return token;
  }
}

function* getToken() {
  const account = yield select(makeSelectAccount());

  return account.token;
}

function* getResource(name) {
  return yield call(get, `/${name}`);
}

function* createResource(name, resource) {
  return yield call(post, `/${name}`, resource);
}

function* get(url) {
  try {
    let token = yield call(checkAuth);
    token = `Bearer ${token}`;

    const getOpt = {
      ...options,
      method: 'GET',
      headers: {
        ...options.headers,
        authorization: token,
      },
    };

    return yield call(request, `${baseUrl + url}`, getOpt);
  } catch (error) {
    yield put(networkError());
    throw error;
  }
}

function* post(url, body) {
  try {
    let token = yield call(checkAuth);
    token = `Bearer ${token}`;

    const postOpt = {
      ...options,
      method: 'POST',
      headers: {
        ...options.headers,
        authorization: token,
      },
      body: JSON.stringify(body),
    };

    return yield call(request, `${baseUrl + url}`, postOpt);
  } catch (error) {
    yield put(networkError());
    throw error;
  }
}

export {
  get,
  post,
  getResource,
  createResource,
};

