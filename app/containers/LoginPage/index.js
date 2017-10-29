import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { makeSelectAccount } from 'containers/App/selectors';

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

class LoginPage extends React.PureComponent {
  dispatchEmailChange = (e) => this.props.dispatch(emailChange(e));
  dispatchPasswordChange = (p) => this.props.dispatch(passwordChange(p));
  dispatchLogin = () => this.props.dispatch(login(this.props.Login.email, this.props.Login.password));

  render() {
    return (
      <div>
        <LoginPageWrapper>
          <LoginForm
            login={this.dispatchLogin}
            email={this.props.Login.email}
            emailChange={this.dispatchEmailChange}
            password={this.props.Login.password}
            passwordChange={this.dispatchPasswordChange}
          />
        </LoginPageWrapper>
      </div>
    );
  }
}

LoginPage.propTypes = {
  Login: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Login: makeSelectLogin(),
  account: makeSelectAccount(),
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
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);

