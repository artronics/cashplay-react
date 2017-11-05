import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

import { initialCustomer } from './customer';

// Constant
export const QUERY_CHANGED = 'cashplay/Customer/QUERY_CHANGED';
export const LOAD_RECENTLY_ADDED = 'cashplay/Customer/LOAD_RECENTLY_ADDED';
export const LOAD_RECENTLY_ADDED_SUCCESSFUL = 'cashplay/Customer/LOAD_RECENTLY_ADDED_SUCCESSFUL';
export const NEW_CUSTOMER_TAB = 'cashplay/Customer/NEW_CUSTOMER_TAB';
export const UPDATE_NEW_CUSTOMER = 'cashplay/Customer/UPDATE_NEW_CUSTOMER';

// Actions
export function queryChanged(query) {
  return {
    type: QUERY_CHANGED,
    query,
  };
}

export function loadRecentlyAdded() {
  return {
    type: LOAD_RECENTLY_ADDED,
  };
}

export function loadRecentlyAddedSuccessful(recentlyAdded) {
  return {
    type: LOAD_RECENTLY_ADDED_SUCCESSFUL,
    recentlyAdded,
  };
}

export function newCustomerTab() {
  return {
    type: NEW_CUSTOMER_TAB,
  };
}

export function updateNewCustomer(customer) {
  return {
    type: UPDATE_NEW_CUSTOMER,
    customer,
  };
}

// Reducer
const initialState = fromJS({
  tabs: ['home'],
  query: '',
  recentlyAdded: [],
  newCustomer: initialCustomer,
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_CHANGED:
      return state
        .set('query', action.query);
    case LOAD_RECENTLY_ADDED_SUCCESSFUL:
      return state
        .set('recentlyAdded', action.recentlyAdded);
    case NEW_CUSTOMER_TAB:
      if (state.get('tabs').find((t) => t === 'new')) {
        return state;
      }
      return state
        .update('tabs', (t) => t.push('new'));
    case UPDATE_NEW_CUSTOMER:
      return state
        .set('newCustomer', action.customer);
    default:
      return state;
  }
}

// Select
const selectCustomerDomain = () => (state) => state.get('customer');

const makeSelectCustomer = () => createSelector(
  selectCustomerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCustomer;

export {
  selectCustomerDomain,
};

