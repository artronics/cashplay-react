/* eslint-disable react/prefer-stateless-function,no-class-assign */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form/immutable';
import Card from 'components/Card';
import { TextField } from 'redux-form-material-ui';
import Button from 'material-ui/Button';
import { newCustomerTab, updateNewCustomer } from './state';

const actions = () => (
  <div>
    <Button>Cancel</Button>
    <Button raised color={'primary'}>Save</Button>
  </div>
);

// const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
//   <TextField
//     label={label}
//     error={touched && error}
//     helperText={touched && error}
//     {...input}
//     {...custom}
//   />
// );
// renderTextField.propTypes = {
//   name: PropTypes.string,
//   input: PropTypes.object,
//   label: PropTypes.string,
//   meta: PropTypes.object,
// };

const FormInput = ({name, label, ...custom}) => (
  <Field name={name} label={label} component={TextField} {...custom}/>
);
FormInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

class NewCustomerForm extends React.PureComponent {
  componentWillUnmount() {
    const {dispatch, formValues} = this.props.formValues;
    if (formValues) {
      dispatch(updateNewCustomer(formValues));
    }
  }

  render() {
    return (
      <form>
        <FormInput
          label={'First Name'}
          name={'firstName'}
        />
        <FormInput
          label={'Last Name'}
          name={'lastName'}
        />
        <Field name="username" component={TextField} placeholder="Street"/>

      </form>

    );
  }
}

NewCustomerForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  formValues: PropTypes.object,
};

NewCustomerForm = reduxForm({
  form: 'newCustomer',
})(NewCustomerForm);

NewCustomerForm = connect(
  (state) => ({
    initialValues: state.getIn(['customer', 'newCustomer']), // pull initial values from account reducer
    formValues: getFormValues('newCustomer')(state),
    // initialValues: console.log(state.getIn(['customer', 'newCustomer']).toJS()), // pull initial values from account reducer
  }),
  null,
)(NewCustomerForm);

class NewCustomer extends React.PureComponent {
  componentWillMount() {
    const {tabs, dispatch} = this.props;
    if (!tabs.find((t) => t === 'new')) {
      dispatch(newCustomerTab());
    }
  }

  render() {
    return (
      <Card title={'New Customer'} actions={actions()}>
        <NewCustomerForm {...this.props}/>
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

