import request from 'utils/request';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { makeSelectAccount } from '../containers/App/selectors';

export const baseUrl = 'http://localhost:8080/api';
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

    return request(`${baseUrl + url}`, getOpt);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const post = function (url, body) {
  const postOpt = {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
  };

  return request(`${baseUrl + url}`, postOpt);
};

export {
  get,
  post,
  getResource,
};

