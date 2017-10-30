import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Constant
export const QUERY_CHANGED = 'cashplay/Customer/QUERY_CHANGED';

// Actions
export function queryChanged(query) {
  return {
    type: QUERY_CHANGED,
    query,
  };
}

// Reducer
const initialState = fromJS({
  query: '',
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_CHANGED:
      return state
        .set('query', action.query);
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

