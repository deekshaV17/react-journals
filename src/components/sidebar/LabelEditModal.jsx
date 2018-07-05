import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';

import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import LabelEditModalStyles from '../../styles/sidebar/labelEditModal/LabelEditModal';
import '../../styles/sidebar/labelEditModal/LabelEditModal.scss';

import CreateLabel from "./CreateLabel";
import {connect} from "react-redux";
@connect(store => ({labels: store.LabelsReducer.labels}))
class LabelEditModal extends Component {

  handleClose = () => {
    this.props.onClose();
  };

  renderLabelList = () => {
    return this.props.labels.map(label => (
      <li key={label.id}>
        <div className='label-edit-modal-list-item'>
          <IconButton className={this.props.classes.createLabelIconButton}>
            <i className='material-icons'>label</i>
          </IconButton>
          <span>{label.title}</span>
          <IconButton className={this.props.classes.createLabelIconButton}>
            <i className='material-icons'>edit</i>
          </IconButton>
        </div>
      </li>
    ))
  };

  render() {
    const { classes } = this.props;
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.props.open}>
        <div className='label-edit-modal-container'>
          <ul className='label-edit-modal-list-container'>
            <div className='label-edit-modal-heading'>
              Edit labels
            </div>
            <li>
              <CreateLabel />
              {this.renderLabelList()}
            </li>
          </ul>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(LabelEditModalStyles)(LabelEditModal);
