import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';
import messages from './messages';

const PaginatorWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items:baseline;
`;

const PageInfoWrapper = styled.p`
  font-size: 14px;
  margin-right: 20px;
`;

const nextMsg = <FormattedMessage {...messages.next} />;
const prevMsg = <FormattedMessage {...messages.previous} />;
const next = (disabled) => <Button disabled={disabled}>{nextMsg}</Button>;
const previous = (disabled) => <Button disabled={disabled}>{prevMsg}</Button>;

function Paginator(props) {
  const from = props.page.pageIndex * props.page.pageSize;
  let to = (from + props.page.pageSize) - 1;
  to = to > props.page.total ? props.page.total : to;
  return (
    <PaginatorWrapper>
      {next(to === props.page.total)}
      {previous(from === 0)}
      <PageInfoWrapper>{from} - {to} <FormattedMessage {...messages.of} /> {props.page.total}</PageInfoWrapper>
    </PaginatorWrapper>
  );
}

Paginator.propTypes = {
  page: PropTypes.shape({
    pageIndex: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default Paginator;
