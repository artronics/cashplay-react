import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TabsWrapper = styled.nav`
min-height:${(props) => props.theme.navHeight};
max-height:${(props) => props.theme.navHeight};
background-color: ${(props) => props.theme.darkBg};
`;

const UlWrapper = styled.ul`
display: flex;
padding: 0;
justify-content: flex-start;
> li {
  display: flex;
  align-items: center;
  height: 60px;
  &:first-child {
    padding-left: 0;
  }
  padding: 0 20px;
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

const renderLink = (text, to) => (<NavLink to={to}>{text}</NavLink>);

TabItem.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

export { Tabs, TabItem };

