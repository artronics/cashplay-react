import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';

const BreadcrumbWrapper = styled.nav`
min-height:${(props) => props.theme.navHeight};
max-height:${(props) => props.theme.navHeight};
background-color: ${(props) => props.theme.darkBg};
`;

const NavWrapper = styled.ul`
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
const getUrlFragments = (path) => {
  let p = path.substring(path.indexOf('/app/') + 5, path.length);
  const fragments = [];
  if (p.indexOf('/') < 0) {
    fragments.push({key: p});
    return fragments;
  }
  while (p.indexOf('/') >= 0) {
    fragments.push({key: p.substring(0, p.indexOf('/'))});
    p = p.substring(p.indexOf('/') + 1, p.length);
  }
  fragments.push({key: p});

  return fragments;
};

const getLink = (key) => {
  switch (key) {
    case 'customers':
      return (<NavLink to={'/app/customers'}>Customers</NavLink>);
    case 'items':
      return (<NavLink to={'/app/items'}>Items</NavLink>);
    default:
      return null;
  }
};

function Breadcrumb(props) {
  const {history} = props;
  const fragments = getUrlFragments(history.location.pathname);
  // const fragments = getUrlFragments('/app/cus/sdf/kir/sdf?dfei');
  console.log(fragments);
  const renderLinks = (fr) => (
    <NavWrapper>
      {fr.map((f) => (<li key={f.key}>{getLink(f.key)}</li>))}
    </NavWrapper>
  );
  return (
    <BreadcrumbWrapper>
      {renderLinks(fragments)}
    </BreadcrumbWrapper>
  );
}

Breadcrumb.propTypes = {
  history: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
)(Breadcrumb);

