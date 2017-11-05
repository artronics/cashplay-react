import React from 'react';
import PropTypes from 'prop-types';
import MdCard, { CardActions, CardContent } from 'material-ui/Card';
import Title from 'components/Title';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({
  content: {
    marginTop: theme.spacing.unit * 2,
  },

});

const renderTitle = (title) => (
  title ? (
    <Title>
      {title}
    </Title>
  ) : (null)
);

function Card(props) {
  const {children, actions, title, classes} = props;
  return (
    <MdCard>
      <CardContent>
        {renderTitle(title)}
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
  title: PropTypes.string,
  children: PropTypes.node,
  actions: PropTypes.node,
  classes: PropTypes.object,
};

export default withStyles(styles)(Card);
