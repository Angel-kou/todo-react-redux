import React, { Component } from 'react';

class Dialog extends Component {
  constructor() {
    super();
  }

  handleClick = () => {
    var value = this.refs.myText.value;
    this.props.onSave(value);

  };

  render() {
    return (
      <div className="dialog">
        <div>
          <h3>Task</h3>
          <input type="text" ref="myText" placeholder={this.props.placeholder} />
        </div>
        <div>
          <input type="button" value="Save Task" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Dialog;
