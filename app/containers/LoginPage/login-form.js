import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from 'utils/messages';
import Card from 'components/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const FormWrapper = styled.div`
width: 320px;
`;

const LoginForm = function (props) {
  const {password, email, login, emailChange, passwordChange} = props;

  return (
    <FormWrapper>
      <Card title={'Login'} sytle={{maxWidth: '320px'}}>
        <TextField
          label={<FormattedMessage {...messages.emailOrUsername}/>}
          value={email}
          onChange={(e) => emailChange(e.target.value)}
          required
          fullWidth
          margin={'normal'}
        />
        <TextField
          label={'Password'}
          onChange={(p) => passwordChange(p.target.value)}
          value={password}
          required
          margin={'normal'}
          fullWidth
          type={'password'}
        />
        <Button
          onClick={login}
          raised
          className={'art-full-width'}
          color={'primary'}
          style={{marginTop: '20px'}}
        >login</Button>
      </Card>
    </FormWrapper>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  emailChange: PropTypes.func,
  passwordChange: PropTypes.func,
  login: PropTypes.func.isRequired,
};

export default LoginForm;
