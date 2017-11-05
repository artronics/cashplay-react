import React from 'react';
import PropTypes from 'prop-types';
import MdCard, { CardActions, CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'components/Toolbar';

const styles = (theme) => ({
  content: {
    marginTop: theme.spacing.unit * 2,
  },

});

const renderTitle = (props) => (
  <Toolbar {...props}/>
);

function Card(props) {
  const {children, actions, classes} = props;
  return (
    <MdCard>
      <CardContent>
        {renderTitle(props)}
        <div className={classes.content}>
          {children}
        </div>
      </CardContent>
      <CardActions style={{display: 'flex 1', justifyContent: 'flex-end'}}>
        {actions}
      </CardActions>
    </MdCard>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.node,
  classes: PropTypes.object,
};

export default withStyles(styles)(Card);
