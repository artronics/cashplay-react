import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';
import InfoIcon from 'material-ui-icons/InfoOutline';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({
  icon: {
    margin: theme.spacing.unit,
  },
});

const MessageBoxWrapper = styled.div`
display: flex;
justify-content: center;
> div {
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.darkText};
  > h2 {
    font-weight: normal;
  }
}
`;

function MessageBox(props) {
  const {classes, icon} = props;
  const renderIcon = (i) => {
    switch (i) {
      case 'info':
        return (<i className={`fa fa-info-circle ${classes.icon}`}/>);
      default:
        return null;
    }
  };
  return (
    <MessageBoxWrapper>
      <div>
        <Typography type={'messagebox'} component={'h2'}>
          {renderIcon(icon)}{props.children}
        </Typography>
      </div>
    </MessageBoxWrapper>
  );
}

MessageBox.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  icon: PropTypes.string,
};
export default withStyles(styles)(MessageBox);
