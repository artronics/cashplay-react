import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TabsWrapper = styled.nav`
min-height:${(props) => props.theme.app.navHeight};
max-height:${(props) => props.theme.app.navHeight};
background-color: ${(props) => props.theme.app.darkBg};
`;

const UlWrapper = styled.ul`
display: flex;
padding-left: 0px;
justify-content: flex-start;
> li {
  display: flex;
  align-items: center;
  height: ${(props) => props.theme.app.navHeight};
  &:first-child > a{
    padding-left: ${(props) => props.theme.mui.spacing.unit}px;
  }
  > .active {
    background-color: red;
  }
  > a {
    padding: 0 20px;
    height: ${(props) => props.theme.app.navHeight};
    color: ${(props) => props.theme.app.navText};
    &:visited {
      color: ${(props) => props.theme.app.navText};
    }
  }
}
  
`;

function Tabs(props) {
  const {children} = props;

  return (
    <TabsWrapper>
      <UlWrapper>
        {children}
      </UlWrapper>
    </TabsWrapper>
  );
}

Tabs.propTypes = {
  children: PropTypes.node,
};

function TabItem(props) {
  const {children, to} = props;
  return (
    <li>{renderLink(children, to)}</li>
  );
}

const renderLink = (text, to) => (<NavLink exact to={to}>{text}</NavLink>);

TabItem.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

export { Tabs, TabItem };

