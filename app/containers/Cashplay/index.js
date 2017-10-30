import React from 'react';
import Card from 'components/Card';
import { compose } from 'redux';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'containers/Header';
import Nav from 'containers/Nav';
import Customer from 'containers/Customer';
import Item from 'containers/Item';
import Receipt from 'containers/Receipt';
import Breadcrumb from 'containers/Breadcrumb';

const CashplayWrapper = styled.div`
display: flex;
height: 100%;
flex-direction: column;
`;
const MainContainer = styled.div`
display: flex;
background-color: ${(props) => props.theme.darkBg};
height: 100%;
`;

function Cashplay(props) {
  return (
    <CashplayWrapper>
      <Route path={'/app'} component={Header}/>
      <MainContainer>
        <Route path={'/app'} component={Nav}/>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
          <Route path={'/app'} component={Breadcrumb}/>
          <Card>
            <Route path={'/app/customer'} component={Customer}/>
            <Route path={'/app/item'} component={Item}/>
          </Card>
        </div>
        <Route path={'/app'} component={Receipt}/>
      </MainContainer>
    </CashplayWrapper>
  );
}

export default compose(
)(Cashplay);
