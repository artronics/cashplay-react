import React from 'react';
import { compose } from 'redux';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'containers/Header';
import Nav from 'containers/Nav';
import Customer from 'containers/Customer';
import Item from 'containers/Item';
import Receipt from 'containers/Receipt';

const CashplayWrapper = styled.div`
display: flex;
height: 100%;
flex-direction: column;
`;
const MainContainer = styled.div`
display: flex;
background-color: ${(props) => props.theme.app.darkBg};
height: 100%;
`;

function Cashplay(props) {
  return (
    <CashplayWrapper>
      <Route path={'/app'} component={Header}/>
      <MainContainer>
        <Route path={'/app'} component={Nav}/>
        <Switch>
          <Route path={'/app/customers'} component={Customer}/>
          <Route path={'/app/items'} component={Item}/>
        </Switch>
        <Route path={'/app'} component={Receipt}/>
      </MainContainer>
    </CashplayWrapper>
  );
}

export default compose(
)(Cashplay);
