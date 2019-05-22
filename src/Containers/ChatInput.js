import React, { Component } from 'react';
import './DeepTherapy.css'

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleInput(input) {
    this.props.inputhandler(this.state.value);
    this.setState({
      value: '',
    })
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleInput();
    }
  }

  handleClick = () => {
    this.handleInput();
  }

  render() {
    return (
      <div>
      <input type="text" className="inputStyle text-black"
      style={{textAlign:'center', opacity:'0.4'}}
      placeholder=""
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        action={{  onClick: this.handleClick}}
        value={this.state.value}
        inputhandler={this.inputhandler}
      />
      <p></p>
<button 
      id="submitButton"  
      className="btn btn-info text-white btn-round" 
      style={{marginBottom:'12px', opacity:'0.8'}}
      onClick={this.handleClick}
      value={this.state.value}
      inputhandler={this.inputhandler}> Enter </button>
 </div>
    );
  }
}

export default ChatInput;
