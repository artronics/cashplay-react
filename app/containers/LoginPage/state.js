import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Constants
export const LOGIN = 'cashplay/Login/LOGIN';
export const EMAIL_CHANGE = 'cashplay/Login/EMAIL_CHANGE';
export const PASSWORD_CHANGE = 'cashplay/Login/PASSWORD_CHANGE';

// Actions
export function login(email, password) {
  return {
    type: LOGIN,
    email,
    password,
  };
}

export function emailChange(email) {
  return {
    type: EMAIL_CHANGE,
    email,
  };
}

export function passwordChange(password) {
  return {
    type: PASSWORD_CHANGE,
    password,
  };
}

// Reducer
const initialState = fromJS({
  email: 'foo',
  password: 'bar',
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case EMAIL_CHANGE:
      return state
        .set('email', action.email);

    case PASSWORD_CHANGE:
      return state
        .set('password', action.password);

    default:
      return state;
  }
}

// Select
const selectLoginDomain = () => (state) => state.get('login');

const makeSelectEmail = () => createSelector(
  selectLoginDomain(),
  (login) => login.get('email')
);

const makeSelectPassword = () => createSelector(
  selectLoginDomain(),
  (login) => login.get('password')
);

const makeSelectLogin = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLogin;
export {
  selectLoginDomain,
  makeSelectEmail,
  makeSelectPassword,
};
