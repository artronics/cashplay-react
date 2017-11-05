/* eslint-disable no-class-assign */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues, reduxForm } from 'redux-form/immutable';
import { Form, FormActions, FormInput, FormSection } from 'components/Form';
import PickPickerBox from 'components/PicPickerBox';
import Button from 'material-ui/Button';
import { saveNewCustomer, updateNewCustomer } from './state';
import { validation } from './customer';

class NewCustomerForm extends React.PureComponent {
  componentWillUnmount() {
    const {dispatch, formValues} = this.props;
    if (formValues) {
      dispatch(updateNewCustomer(formValues));
    }
  }

  onSave = () => {
    const {dispatch, formValues} = this.props;
    dispatch(saveNewCustomer(formValues.toJS()));
  };
  render() {
    return (
      <Form title={'New Customer'} {...this.props}>
        <FormSection columns={2}>
          <FormSection>
            <PickPickerBox/>
          </FormSection>
          <FormSection>
            <FormInput required capitalize label={'First Name'} name={'firstName'} validate={validation.firstName}/>
            <FormInput required label={'Last Name'} name={'lastName'} validate={validation.lastName}/>
            <FormInput label={'Mobile Number'} name={'mobile'} validate={validation.mobile}/>
            <FormInput label={'email'} name={'email'} validate={validation.email}/>
          </FormSection>

        </FormSection>
        <FormActions>
          <Button raised color={'primary'} name={'save'} onClick={this.onSave}>Save</Button>
          <Button name={'cancel'}>Cancel</Button>
        </FormActions>
      </Form>

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
  }),
  null,
)(NewCustomerForm);

export default NewCustomerForm;
