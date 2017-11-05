import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

const Title = (props) => (
  <Typography type="headline" component="h2">
    {props.children}
  </Typography>
);

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
