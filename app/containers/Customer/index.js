import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from 'components/SearchInput';
import Button from 'material-ui/Button';
import Card from 'components/Card';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import RecentlyAddedCustomers from './RecentlyAddedCustomers';
import makeSelectCustomer, { reducer } from './state';
import saga from './saga';

const SearchSection = ({className}) => (
  <div className={className}>
    <SearchInput
      placeholder={'Search'}
    />
    <div style={{flex: '1'}}></div>
    <Button
      raised
      color={'primary'}
    >
      <i className={'fa fa-plus'} style={{marginRight: '10px'}}></i>
      New Customer
    </Button>
  </div>
);

const SearchSectionWrapper = styled(SearchSection)`
margin-top: 20px;
display: flex;
`;

function Customer(props) {
  return (
    <div>
      <Card title={'Search Customers'}>
        <SearchSectionWrapper/>
      </Card>
      <RecentlyAddedCustomers/>
    </div>
  );
}

Customer.propTypes = {
  Customer: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Customer: makeSelectCustomer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'customer', reducer});
const withSaga = injectSaga({key: 'customer', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Customer);
