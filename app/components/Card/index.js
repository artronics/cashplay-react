import React from 'react';
import PropTypes from 'prop-types';
import MdCard, { CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const renderTitle = (title) => (
  title ? (
    <Typography type="headline" component="h2">
      {title}
    </Typography>
  ) : (null)
);

function Card(props) {
  const {children, actions, title} = props;
  return (
    <MdCard>
      <CardContent>
        {renderTitle(title)}
        {children}
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
};

export default Card;
