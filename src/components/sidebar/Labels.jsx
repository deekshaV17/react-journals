import React, { Component } from 'react';
import {connect} from "react-redux";

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import LabelStyles from '../../styles/sidebar/labels/Labels';

import Button from '@material-ui/core/Button';
import LabelEditModal from "./LabelEditModal";

@connect(store => ({labels: store.LabelsReducer.labels}))
class Labels extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  renderLabelList = () => {
    return this.props.labels.map(label => (
      <li className='sidebar-list-item' key={label.id}>
        <Link to={`/label/${label.title}`} className='list-item-link'>
          <div className='list-item'>
            <i className="material-icons svg-icon">label</i>
            <span className='list-item-title'>{label.title}</span>
          </div>
        </Link>
      </li>
    ))
  };

  render() {
    const { classes } = this.props;
    return (
      <ul className='sidebar-list-container'>
        <div className='label-container'>
          <div>Labels</div>
          <Button variant="contained" size='small' className={`${classes.button}, ${classes.labelEditButton}`} onClick={this.handleClickOpen}>
            Edit
          </Button>
          <LabelEditModal
            open={this.state.open}
            onClose={this.handleClose}
          />
        </div>
        {this.renderLabelList()}
        <li className='sidebar-list-item' onClick={this.handleClickOpen}>
          <div className='create-label-link'>
            <i className='material-icons svg-icon'>add</i>
            <span className='list-item-title'>Create new label</span>
          </div>
        </li>
      </ul>
    );
  }
}

export default withStyles(LabelStyles)(Labels);
