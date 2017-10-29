import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

function Customer(props) {
  return (
    <div>
      customer
    </div>
  );
}

export default compose(
  withRouter,
)(Customer);
