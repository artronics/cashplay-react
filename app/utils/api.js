import request from 'utils/request';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { networkError } from 'containers/App/state';
import { makeSelectAccount } from 'containers/App/selectors';

export const baseUrl = 'https://api.pawnfield.co.uk/api';
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

    return yield call(request, `${baseUrl + url}`, getOpt);
  } catch (error) {
    yield put(networkError());
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

