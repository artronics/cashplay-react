import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form/immutable';
import { TextField } from 'redux-form-material-ui';
import Typography from 'material-ui/Typography';
import Card from 'components/Card';

const FormInput = ({name, label, ...custom}) => (
  <Field name={name} label={label} component={TextField} fullWidth margin={'normal'} {...custom}/>
);
FormInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

const FormSectionWrapper = styled.div`
`;
const FormSectionInputWrapper = styled.div`
  padding: 0 ${(props) => props.theme.mui.spacing.unit * 2}px;
  display: flex;
  > div {
    width: ${(props) => 100 / props.columns}%;
    margin-right: 10%;
  }
`;
const FormSectionTitle = styled(Typography)`
  color: ${(props) => props.theme.app.darkText};
  padding: 0 ${(props) => props.theme.mui.spacing.unit * 1}px;
`;
const FormSection = (props) => {
  const {children, title, columns = 1} = props;
  const renderTitle = (t) => (t ? (
    <FormSectionTitle component={'h3'} type={'subheading'}>{t}</FormSectionTitle>) : null);
  return (
    <FormSectionWrapper>
      {renderTitle(title)}
      <FormSectionInputWrapper columns={columns}>
        {children.map((c) => (<div key={c.props.name}>{c}</div>))}
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
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  > div {
    padding-right: ${(props) => props.theme.mui.spacing.unit * 2}px;
  }
`;
const FormActions = (props) => {
  const {children} = props;
  return (
    <FormActionsWrapper>
      {children.map((c) => (<div key={c.props.name}>{c}</div>)).reverse()}
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
    <Card title={title}>
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

