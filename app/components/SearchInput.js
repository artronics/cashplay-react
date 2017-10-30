import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
  width: 33%;
  border: 2px solid ${(props) => props.theme.searchInputBorderFocusColor};
  border-radius: ${(props) => props.theme.searchInputBorderRadius};
  &:focus {
    border-radius: 10px;
    border-color: ${(props) => props.theme.searchInputBorderColor};
    outline: none;
  }
`;

function SearchInput(props) {
  return (
    <InputWrapper placeholder={'Search'}/>
  );
}

export default SearchInput;

