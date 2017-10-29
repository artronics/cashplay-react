import { fromJS } from 'immutable';

const initialState = fromJS({
  account: null,
});

export function reducer(state = initialState, action) {
  switch (state.action) {
    default:
      return state;
  }
}

