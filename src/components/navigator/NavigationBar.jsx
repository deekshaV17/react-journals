import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import NavigationBarStyles from '../../styles/navigator/NavigationBar';
import '../../styles/navigator/NavigationBar.scss';

class NavigationBar extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className='navigation-bar-container'>
        <AppBar position="static" color="default" className={classes.appBarContainer}>
        <Toolbar className={classes.toolBarContainer}>
          <Button className={classes.sidebarButton} variant="fab" onClick={() => this.props.toggleSidebar()}>
            <i className="material-icons">reorder</i>
          </Button>
          <div className='navigation-title-container'>
            <Typography variant="title" color="inherit" className={classes.appBarHeading}>
              My
            </Typography>
            <Typography variant="title" color="inherit">
              journal
            </Typography>
          </div>
          <Button variant="contained" color="default" className={classes.searchButton}>
            <i className={`material-icons search-icon`}>search</i>
            Search
          </Button>
          <i className={`material-icons search-icon-small-width`}>search</i>
          <i className={`material-icons grid-icon`}>dashboard</i>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default withStyles(NavigationBarStyles)(NavigationBar);
