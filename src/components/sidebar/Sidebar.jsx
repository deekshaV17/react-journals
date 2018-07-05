import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { NotesIcon, ReminderIcon } from "../svg/SVGIcons";
import SidebarStyles from '../../styles/sidebar/Sidebar';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Labels from './Labels';

import '../../styles/sidebar/Sidebar.scss';

class Sidebar extends Component {

  closeSidebar = () => {
    const width = window.innerWidth;
    if(width <=786 ) {
      this.props.toggleSidebar();
    }
  };


  render() {
    const { classes } = this.props;

    const sideList = (
      <div className='sidebar-main-container'>

        <div className='sidebar-heading'>
          My Journal
        </div>

        <ul className='sidebar-list-container'>
          <li className='sidebar-list-item'>
            <Link to={'/'} className='list-item-link'>
              <div className='list-item'>
                <NotesIcon className='svg-icon'/>
                <span className='list-item-title'>Notes</span>
              </div>
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to={'/reminders'} className='list-item-link'>
              <div className='list-item'>
                <ReminderIcon className='svg-icon'/>
                <span className='list-item-title'>Reminders</span>
              </div>
            </Link>
          </li>
        </ul>
        <Divider />
        <Labels />
        <Divider />
        <ul className='sidebar-list-container'>
          <li className='sidebar-list-item'>
            <Link to={'/archive'} className='list-item-link'>
              <div className='list-item'>
                <i className='material-icons svg-icon'>archive</i>
                <span className='list-item-title'>Archive</span>
              </div>
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to={'/trash'} className='list-item-link'>
              <div className='list-item'>
                <i className='material-icons svg-icon'>delete</i>
                <span className='list-item-title'>Trash</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );

    return (
        <div
          ref={this.props.myref}
          tabIndex={0}
          onBlur={() => this.closeSidebar()}
          className={this.props.open ? 'drawer-container-show' : 'drawer-container-hide'}
        >
          {sideList}
        </div>
    );
  }
}

export default withStyles(SidebarStyles)(Sidebar);
