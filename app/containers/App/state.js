import { fromJS } from 'immutable';
import { ACCOUNT, RETRIEVE_ACCOUNT_FROM_STORAGE } from './constants';

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
  account: {},
});

export function reducer(state = initialState, action) {
  switch (action.type) {
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

