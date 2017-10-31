/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import TextFiled from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { newCustomerTab, updateNewCustomer } from './state';

const actions = () => (
  <div>
    <Button>Cancel</Button>
    <Button raised color={'primary'}>Save</Button>
  </div>
);

class NewCustomer extends React.PureComponent {
  componentWillMount() {
    const {tabs, dispatch} = this.props;
    if (!tabs.find((t) => t === 'new')) {
      dispatch(newCustomerTab());
    }
  }

  render() {
    const update = (c) => dispatch(updateNewCustomer(c));
    const {newCustomer: customer, dispatch} = this.props;
    return (
      <Card title={'New Customer'} actions={actions()}>
        <TextFiled
          label={'First Name'}
          value={customer.firstName}
          onChange={(e) => update({...customer, firstName: e.target.value})}
        />
        <TextFiled
          label={'Last Name'}
          value={customer.lastName}
          onChange={(e) => update({...customer, lastName: e.target.value})}
        />
      </Card>
    );
  }
}

NewCustomer.propTypes = {
  newCustomer: PropTypes.object,
  tabs: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

export default NewCustomer;

