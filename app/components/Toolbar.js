import React from 'react';
import PropTypes from 'prop-types';
import MdToolbar from 'material-ui/Toolbar';
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
    marginTop: theme.spacing.unit * 2,
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

const Toolbar = (props) => {
  const {classes, selected} = props;

  return (
    <MdToolbar
      className={classes.root}
    >
      <div className={classes.title}>
        <Tooltip title="Refresh">
          <IconButton aria-label="Refresh">
            <RefreshIcon/>
          </IconButton>
        </Tooltip>
      </div>
      <div className={classes.spacer}/>
      <div className={classes.actions}>
        {(selected > 0) ? (
          <div style={{display: 'flex'}}>
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton aria-label="Edit">
                <EditIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip title="View">
              <IconButton aria-label="View">
                <EyeIcon/>
              </IconButton>
            </Tooltip>
            <Button style={{width: '20ch'}}>Add to Receipt</Button>
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
};

export default withStyles(toolbarStyles)(Toolbar);
