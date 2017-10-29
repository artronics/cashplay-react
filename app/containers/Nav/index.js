import React from 'react';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = (to, text, icon) => (
  <li>
    <NavLink to={to}>
      <i className={`fa fa-fw fa-${icon}`}></i>{text}
    </NavLink>
  </li>

);

function Nav(props) {
  return (
    <NavWrapper>
      {NavItem('/app/customer', 'Customers', 'user')}
      {NavItem('/app/item', 'Items', 'laptop')}
    </NavWrapper>
  );
}

const NavWrapper = styled.ul`
width: 15%;
color: ${(props) => props.theme.darkBg};
list-style: none;
padding: 0px;
margin: 0px;
&:first-child {
    margin-top: 0px;
}
> li {
  width: 100%;
  &:hover {
    background-color: ${(props) => props.theme.darkBgHover};
  }
  > a {
    display: block;
    width: 100%;
    padding: 20px 0px 10px 40px;
    &:visited {
      color: ${(props) => props.theme.darkText};
    }
    > i {
      margin-right: 20px;
    }
  }
}
`;


export default compose(
)(Nav);

