import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Snackbar from 'material-ui/Snackbar';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage';
import messages from 'utils/messages';
import { makeSelectApp } from './selectors';
import { dismissNetworkError, reducer, retrieveAccountFromStorage } from './state';
import Cashplay from '../Cashplay/index';

const AppWrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
background-color: red;
`;

const networkErrorMsg = (
  <span style={{color: 'red'}}><i className="fa fa-warning"></i>
    <FormattedMessage {...messages.networkError} /></span>
);

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.PureComponent {

  componentWillMount() {
    const {account} = this.props.App;
    const storageAccount = window.localStorage.getItem('account');
    if (account.token) {
      this.loggedIn = true;
    } else if (!account.token && !storageAccount) {
      this.loggedIn = false;
    } else if (!account.token && storageAccount) {
      this.props.dispatch(retrieveAccountFromStorage(JSON.parse(storageAccount)));
      this.loggedIn = true;
    }
  }

  loggedIn = false;

  render() {
    const {networkError} = this.props.App;
    return (
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <CashplayRoute loggedIn={this.loggedIn} path="/app" component={Cashplay}/>
          <LoginRoute path="/login" loggedIn={this.loggedIn} component={LoginPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
        <Snackbar
          open={networkError}
          message={networkErrorMsg}
          onRequestClose={() => this.props.dispatch(dismissNetworkError())}
        />
      </AppWrapper>
    );
  }
}

App.propTypes = {
  App: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  networkError: React.PropTypes.bool,
};
const LoginRoute = ({component: Component, loggedIn, ...rest}) => (
  <Route
    {...rest}
    render={(props) => (
      !loggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect
          to={{
            pathname: '/app',
          }}
        />
      )
    )}
  />
);
const CashplayRoute = ({component: Component, loggedIn, ...rest}) => (
  <Route
    {...rest}
    render={(props) => (
      loggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )
    )}
  />
);

const mapStateToProps = createStructuredSelector({
  App: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'app', reducer});

export default compose(
  withRouter,
  withReducer,
  withConnect,
)(App);

