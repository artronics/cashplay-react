import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form/immutable';
import { TextField } from 'redux-form-material-ui';
import Typography from 'material-ui/Typography';
import Card from 'components/Card';

const getKey = (child, index) => child.props.name || index;

const FormInput = ({name, label, capitalize, ...custom}) => (
  <Field
    name={name}
    className={`${capitalize ? 'art-capitalize-input' : ''}`}
    label={label}
    component={TextField}
    fullWidth
    margin={'normal'}
    {...custom}
  />
);
FormInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  capitalize: PropTypes.bool,
};

const FormSectionWrapper = styled.div`
`;
const FormSectionInputWrapper = styled.div`
  padding: 0 ${(props) => props.theme.mui.spacing.unit * 2}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  > div {
    flex-basis: ${(props) => (100 / props.columns) - 5}%;
  }
`;
const FormSectionTitle = styled(Typography)`
  padding-left: ${(props) => props.theme.mui.spacing.unit * 1}px;
  padding-top: ${(props) => props.theme.mui.spacing.unit * 6}px;
  color: ${(props) => props.theme.mui.palette.grey['700']}!important;
`;
const FormSection = (props) => {
  const {children, title, columns = 1} = props;
  const renderTitle = (t) => (t ? (
    <FormSectionTitle className={'kir'} component={'h3'} type={'subheading'}>{t}</FormSectionTitle>) : null);
  const renderChildren = (com) => com.map
    ? com.map((c, i) => (<div key={getKey(c, i)}>{c}</div>))
    : (<div>{com}</div>);
  return (
    <FormSectionWrapper>
      {renderTitle(title)}
      <FormSectionInputWrapper columns={columns}>
        {renderChildren(children)}
      </FormSectionInputWrapper>
    </FormSectionWrapper>
  );
};

FormSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  columns: PropTypes.number,
};

const FormActionsWrapper = styled.div`
  margin-top: ${(props) => props.theme.mui.spacing.unit * 5}px;
  margin-bottom: ${(props) => props.theme.mui.spacing.unit * 2}px;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  > div {
    padding-right: ${(props) => props.theme.mui.spacing.unit * 2}px;
  }
`;
const FormActions = (props) => {
  const {children} = props;
  const renderChildren = (com) => com.map
    ? com.map((c, i) => (<div key={getKey(c, i)}>{c}</div>)).reverse()
    : (<div>{com}</div>);
  return (
    <FormActionsWrapper>
      {renderChildren(children)}
    </FormActionsWrapper>
  );
};
FormActions.propTypes = {
  children: PropTypes.node,
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form = (props) => {
  const {children, title} = props;
  return (
    <Card title={title} {...props}>
      <FormWrapper>
        {children}
      </FormWrapper>
    </Card>
  );
};
Form.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export {
  Form,
  FormSection,
  FormInput,
  FormActions,
};

