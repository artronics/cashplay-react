import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import SearchInput from 'components/SearchInput';
import Button from 'material-ui/Button';
import Card from 'components/Card';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { withTabs } from 'containers/Tab';
import RecentlyAddedCustomers from './RecentlyAddedCustomers';
import makeSelectCustomer, { loadRecentlyAdded, newCustomerTab, reducer, } from './state';
import saga from './saga';
import { tabs } from './customer';
import NewCustomer from './NewCustomer';

class Customer extends React.PureComponent {
  componentWillMount() {
    this.props.dispatch(loadRecentlyAdded());
  }

  render() {
    return (
      <Switch>
        <Route exact path={'/app/customers'}>
          <CustomerHome {...this.props}/>
        </Route>
        <Route path={'/app/customers/new'}>
          <NewCustomer dispatch={this.props.dispatch} {...this.props.Customer}/>
        </Route>
      </Switch>
    );
  }
}

function CustomerHome(props) {
  const {recentlyAdded} = props.Customer;
  return (
    <div>
      <Card title={'Search Customers'}>
        <SearchSection {...props}/>
      </Card>
      <RecentlyAddedCustomers data={recentlyAdded}/>
    </div>
  );
}

CustomerHome.propTypes = {
  Customer: PropTypes.object.isRequired,
};

Customer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  Customer: PropTypes.object.isRequired,
};

const NewCustomerButton = withRouter(({history, ...props}) => (
  <Button
    raised
    color={'primary'}
    onClick={() => props.newCustomerTab(history)}
  >
    <i className={'fa fa-plus'} style={{marginRight: '10px'}}></i>
    New Customer
  </Button>
));
const SearchSection = (props) => (
  <div style={{display: 'flex'}}>
    <SearchInput
      placeholder={'Search'}
    />
    <div style={{flex: '1'}}></div>
    <NewCustomerButton {...props}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  Customer: makeSelectCustomer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    newCustomerTab: (history) => {
      history.push('/app/customers/new');
      return dispatch(newCustomerTab());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'customer', reducer});
const withSaga = injectSaga({key: 'customer', saga});

const WrappedCustomerWithTabs = withTabs('Customer')(tabs)(Customer);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(WrappedCustomerWithTabs);
