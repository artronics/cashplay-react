import React from 'react';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
width: 15%;
display: flex;
flex-direction: column;
color: rgb(107,107,107);
`;

function Nav(props) {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to={'/app/customer'}>
            Customer
          </NavLink>
        </li>
        <li>
          <NavLink to={'/app/item'}>
            Item
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default compose(
)(Nav);

