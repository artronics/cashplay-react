import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const HeaderWrapper = styled.div`

`;

function Header(props) {
  return (
    <HeaderWrapper>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit" style={{flex: 1}}>
            Cashplay
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
  );
}

export default Header;
