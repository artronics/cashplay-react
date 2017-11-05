import React from 'react';
import PropTypes from 'prop-types';
import MdToolbar from 'material-ui/Toolbar';
import Title from 'components/Title';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import EyeIcon from 'material-ui-icons/RemoveRedEye';
import EditIcon from 'material-ui-icons/Edit';
import RefreshIcon from 'material-ui-icons/Refresh';
import { withStyles } from 'material-ui/styles';

const toolbarStyles = (theme) => ({
  root: {
    paddingRight: 2,
    paddingLeft: 0,
    marginTop: theme.spacing.unit * 2,
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    display: 'flex',
    width: '100%',
  },
});

const renderTitle = (title) => (
  title ? (
    <Title>
      {title}
    </Title>
  ) : (null)
);

const renderRefresh = (ref) => ref
  ? (
    <Tooltip title="Refresh">
      <IconButton aria-label="Refresh" onClick={ref}>
        <RefreshIcon/>
      </IconButton>
    </Tooltip>
  )
  : null;

const renderEdit = (edit) => edit
  ? (
    <Tooltip title="Edit">
      <IconButton aria-label="Edit" onClick={edit}>
        <EditIcon/>
      </IconButton>
    </Tooltip>
  )
  : null;
const renderView = (view) => view
  ? (
    <Tooltip title="View">
      <IconButton aria-label="View" onClick={view}>
        <EyeIcon/>
      </IconButton>
    </Tooltip>
  )
  : null;

const renderDelete = (delete_) => delete_
  ? (
    <Tooltip title="Delete">
      <IconButton aria-label="Delete" onClick={delete_}>
        <DeleteIcon/>
      </IconButton>
    </Tooltip>
  )
  : null;
const renderAddToReceipt = (addToReceipt) => addToReceipt
  ? (
    <Button style={{width: '20ch'}} onClick={addToReceipt}>Add to Receipt</Button>
  )
  : null;
const Toolbar = (props) => {
  const {classes, selected, title, refresh, edit, delete_, view, addToReceipt} = props;

  return (
    <MdToolbar
      className={classes.root}
    >
      <div className={classes.title}>
        {renderTitle(title)}
        {renderRefresh(refresh)}
      </div>
      <div className={classes.spacer}/>
      <div className={classes.actions}>
        {(selected > 0) ? (
          <div style={{display: 'flex'}}>
            {renderDelete(delete_)}
            {renderEdit(edit)}
            {renderView(view)}
            {renderAddToReceipt(addToReceipt)}
          </div>
        ) : (
          null
        )}
      </div>
    </MdToolbar>
  );
};

Toolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  selected: PropTypes.number.isRequired,
  title: PropTypes.string,
  refresh: PropTypes.func,
  edit: PropTypes.func,
  view: PropTypes.func,
  delete_: PropTypes.func,
  addToReceipt: PropTypes.func,
};

export default withStyles(toolbarStyles)(Toolbar);
