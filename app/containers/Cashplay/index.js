import React from 'react';
import { compose } from 'redux';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'containers/Header';
import Nav from 'containers/Nav';
import Customer from 'containers/Customer';
import Item from 'containers/Item';

const CashplayWrapper = styled.div`
display: flex;
height: 100%;
flex-direction: column;
`;
const MainContainer = styled.div`
display: flex;
background-color: rgb(232,232,232);
height: 100%;
`;

function Cashplay(props) {
  return (
    <CashplayWrapper>
      <Route path={'/app'} component={Header}/>
      <MainContainer>
        <Route path={'/app'} component={Nav}/>
        <Route path={'/app/customer'} component={Customer}/>
        <Route path={'/app/item'} component={Item}/>
      </MainContainer>
    </CashplayWrapper>
  );
}

export default compose(
)(Cashplay);
