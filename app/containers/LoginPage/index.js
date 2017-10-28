import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import LoginForm from './login-form';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import makeSelectLogin, { emailChange, login, passwordChange, reducer } from './state';

const LoginPageWrapper = styled.div`
display: flex;
height: 100vh;
align-items: center;
justify-content: center;
`;
const LoginPage = function (props) {
  const {email, password} = props.Login;
  const dispatchEmailChange = (e) => props.dispatch(emailChange(e));
  const dispatchPasswordChange = (p) => props.dispatch(passwordChange(p));
  const dispatchLogin = () => props.dispatch(login(email, password));

  return (
    <LoginPageWrapper>
      <LoginForm
        login={dispatchLogin}
        email={email}
        emailChange={dispatchEmailChange}
        password={password}
        passwordChange={dispatchPasswordChange}
      />
    </LoginPageWrapper>
  );
};

LoginPage.propTypes = {
  Login: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'login', reducer});
const withSaga = injectSaga({key: 'login', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);

