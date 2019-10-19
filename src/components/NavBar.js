import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

class NavBar extends React.Component {
  render () {
    return(
      <div>
          <AppBar position="static">
            <ToolBar>
              <Typography variant="subtitle1" color="inherit">
                React & Material-UI Sample Application
              </Typography>
            </ToolBar>
          </AppBar>
      </div>
    );
  }
}

export default NavBar;
