import React from 'react';
import styled from 'styled-components';

const ReceiptWrapper = styled.div`
width: 25%;
background-color: ${(props) => props.theme.darkBg};
`;

function Receipt(props) {
  return (
    <ReceiptWrapper>
      <div>receipt</div>
    </ReceiptWrapper>
  );
}

export default Receipt;

