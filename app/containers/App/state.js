import { fromJS } from 'immutable';
import { ACCOUNT, DISMISS_NETWORK_ERROR, NETWORK_ERROR, RETRIEVE_ACCOUNT_FROM_STORAGE, } from './constants';

export function networkError() {
  return {
    type: NETWORK_ERROR,
  };
}

export function dismissNetworkError() {
  return {
    type: DISMISS_NETWORK_ERROR,
  };
}

export function account(acc) {
  return {
    type: ACCOUNT,
    account: acc,
  };
}

export function retrieveAccountFromStorage(account) {
  return {
    type: RETRIEVE_ACCOUNT_FROM_STORAGE,
    account,
  };
}

const initialState = fromJS({
  networkError: false,
  account: {},
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case NETWORK_ERROR:
      return state
        .set('networkError', true);
    case DISMISS_NETWORK_ERROR:
      return state
        .set('networkError', false);
    case ACCOUNT:
      return state
        .set('account', action.account);
    case RETRIEVE_ACCOUNT_FROM_STORAGE:
      return state
        .set('account', action.account);
    default:
      return state;
  }
}

