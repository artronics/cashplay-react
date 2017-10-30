import React from 'react';
import styled from 'styled-components';

const BreadcrumbWrapper = styled.div`
height:${(props) => props.theme.navHeight};
background-color: ${(props) => props.theme.darkBg};
display: flex;
`;

function Breadcrumb(props) {
  return (
    <BreadcrumbWrapper>
      <div>kir</div>
      <div>kos</div>
    </BreadcrumbWrapper>
  );
}

export default Breadcrumb;
