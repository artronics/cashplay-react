import React from 'react';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';
import LoginPage from 'containers/LoginPage';
import { Helmet } from 'react-helmet';

const TitleWrapper = styled.div`
  display: flex;
  > div {
    > h1 {
      color: white;
      width: 100%;
      margin: 0;
      padding: 100px 25px 20px 25px;
    }
    > h2 {
      color: white;
      padding-left: 25px;
    }
  }
`;
const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.mui.palette.primary.A100};
  padding: 10px 10px 20px 0px;
  display: flex;
  flex-direction: column;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>pawnfield: Home</title>
        </Helmet>
        <HeaderWrapper>
          <TitleWrapper>
            <div style={{width: '100%'}}>
              <Typography component={'h1'} type={'display3'}>pawnfield</Typography>
              <Typography component={'h2'} type={'title'}>
                <em>
                  pawnfield is a Software as a Service (SaaS), targeting pawnbrokers and pawnshop businesses.
                </em>
              </Typography>
            </div>
            <div>
              <LoginPage/>
              <Typography>Please use <em>admin@admin.com</em> as email and <em>&ldquo;secret&rdquo;</em> as
                password</Typography>
            </div>
          </TitleWrapper>
          <Typography align={'center'} color={'accent'} component={'h2'} type={'title'}>This project is a work in
            progress.</Typography>
        </HeaderWrapper>
      </div>
    );
  }
}
