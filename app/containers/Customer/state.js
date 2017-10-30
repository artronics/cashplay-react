import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Constant
export const QUERY_CHANGED = 'cashplay/Customer/QUERY_CHANGED';
export const LOAD_RECENTLY_ADDED = 'cashplay/Customer/LOAD_RECENTLY_ADDED';
export const LOAD_RECENTLY_ADDED_SUCCESSFUL = 'cashplay/Customer/LOAD_RECENTLY_ADDED_SUCCESSFUL';

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


// Reducer
const initialState = fromJS({
  query: '',
  recentlyAdded: [],
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_CHANGED:
      return state
        .set('query', action.query);
    case LOAD_RECENTLY_ADDED_SUCCESSFUL:
      return state
        .set('recentlyAdded', action.recentlyAdded);
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

