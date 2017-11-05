/* eslint-disable react/prefer-stateless-function,no-class-assign */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import NewCustomerForm from './NewCustomerForm';
import { newCustomerTab } from './state';

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
    return (
      <div>
        <NewCustomerForm {...this.props}/>
      </div>
    );
  }
}

NewCustomer.propTypes = {
  tabs: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

export default NewCustomer;

