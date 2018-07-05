import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import CreateLabelStyles from "../../styles/sidebar/createLabel/CreateLabel";

import '../../styles/sidebar/createLabel/CreateLabel.scss';
import LabelActions from "../actions/sidebar/LabelActions";

@connect(store => ({store: store}))
class CreateLabel extends Component {

  state = {
    labelName: '',
  };

  handleInputChange = labelName => {
    this.setState({ labelName });
  };

  createLabel = () => {
    console.log('ayy');
    this.props.dispatch(LabelActions.createLabel(this.state.labelName));
    this.setState({ labelName: '' });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className='create-label-container'>
        <IconButton className={classes.createLabelIconButton}>
          <i className='material-icons'>clear</i>
        </IconButton>
        <Input
          autoFocus
          value={this.state.labelName}
          placeholder="Create new label"
          className={classes.createLabelInput}
          onChange={e => this.handleInputChange(e.target.value)}
        />
        <IconButton className={classes.createLabelIconButton} onClick={() => this.createLabel()}>
          <i className='material-icons'>done</i>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(CreateLabelStyles)(CreateLabel);
