import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';

import { checkLabelExists } from "../../scripts/Scripts";

import LabelActions from "../../actions/sidebar/LabelActions";
import CreateLabelStyles from "../../styles/sidebar/createLabel/CreateLabel";

import '../../styles/sidebar/createLabel/CreateLabel.scss';

@connect(store => ({labels: store.LabelsReducer.labels}))
class CreateLabel extends Component {

  state = {
    labelName: '',
    error: '',
  };

  handleInputChange = labelName => {
    this.setState({
      labelName,
      error: '',
    });
  };

  handleKeyInput = e => {
    if (e.which === 13) {
      this.createLabel();
    }
  };

  createLabel = () => {
    if (this.state.labelName !== '') {
      if (checkLabelExists(this.props.labels, this.state.labelName) === -1) {
        this.props.dispatch(LabelActions.createLabel(this.state.labelName));
        this.setState({ labelName: '' });
      }
      else {
        this.setState({ error: 'Label already exists' });
      }
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className='create-label-container'>
        <IconButton className={classes.createLabelIconButton}>
          <i className='material-icons'>clear</i>
        </IconButton>
        <div>
          <Input
            autoFocus
            value={this.state.labelName}
            placeholder="Create new label"
            className={classes.createLabelInput}
            onKeyPress={e => this.handleKeyInput(e)}
            onChange={e => this.handleInputChange(e.target.value)}
          />
          {
            this.state.error !== '' &&
            <div className='create-label-error'>
              {this.state.error}
            </div>
          }
        </div>
        <IconButton
          className={classes.createLabelIconButton}
          onClick={() => this.createLabel()}
        >
          <i className='material-icons'>done</i>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(CreateLabelStyles)(CreateLabel);
