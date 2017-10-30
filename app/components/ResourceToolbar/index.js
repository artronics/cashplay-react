/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { injectIntl, intlShape } from 'react-intl';
import IconButton from 'material-ui/IconButton';
import Refresh from 'material-ui-icons/Refresh';
import RemoveRedEye from 'material-ui-icons/RemoveRedEye';
import Edit from 'material-ui-icons/Edit';
import Delete from 'material-ui-icons/Delete';
import message from './messages';

const ResourceToolbarWrapper = styled.div`
  display: flex;
`;
const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0 16px;
`;
const LeftWrapper = styled.div`
  display: flex;
  margin: 0 16px;
`;
const view = (onView, disabled, intl) => (
  <IconButton disabled={disabled} onClick={onView} title={intl.formatMessage(message.view)}>
    <RemoveRedEye/>
  </IconButton>);
const edit = (onEdit, disabled, intl) => (
  <IconButton disabled={disabled} onClick={onEdit} title={intl.formatMessage(message.edit)}>
    <Edit/>
  </IconButton>);
const delete_ = (onDelete, disabled, intl) => (
  <IconButton disabled={disabled} onClick={onDelete} title={intl.formatMessage(message.delete_)}>
    <Delete/>
  </IconButton>);

const refresh = (onRefresh, disabled, intl) => (
  <IconButton disabled={disabled} onClick={onRefresh} title={intl.formatMessage(message.refresh)}>
    <Refresh/>
  </IconButton>);

function ResourceToolbar(props) {
  return (
    <ResourceToolbarWrapper>
      {console.log('tool', props.disabled)}
      <LeftWrapper>
        {refresh(props.onRefresh, false, props.intl)}
      </LeftWrapper>
      <RightWrapper>
        {delete_(props.onDelete, props.disabled, props.intl)}
        {edit(props.onEdit, props.disabled, props.intl)}
        {view(props.onView, props.disabled, props.intl)}
        {props.extraActions}
      </RightWrapper>
    </ResourceToolbarWrapper>
  );
}

ResourceToolbar.propTypes = {
  intl: intlShape.isRequired,
  disabled: PropTypes.bool,
  onView: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onRefresh: PropTypes.func,
  extraActions: PropTypes.element,
};

export default injectIntl(ResourceToolbar);
