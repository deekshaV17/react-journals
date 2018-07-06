import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';


import CreateLabel from "./CreateLabel";
import LabelEditModalStyles from '../../styles/sidebar/labelEditModal/LabelEditModal';

import '../../styles/sidebar/labelEditModal/LabelEditModal.scss';

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
        <div>
          <ul className='label-edit-modal-list-container'>
            <div className='label-edit-modal-heading'>
              Edit labels
            </div>
            <li>
              <CreateLabel />
            </li>
            {this.renderLabelList()}
          </ul>
        </div>
        <div className='label-edit-modal-done-button'>
          <Button className={classes.labelEditModalDoneButton} onClick={() => this.handleClose()}>Done</Button>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(LabelEditModalStyles)(LabelEditModal);
