import React, { Component } from 'react';
import ElizaBot from 'elizabot';
import debounce from 'lodash.debounce';
import ChatInput from './ChatInput'
import ChatHistory from './ChatHistory'
import './DeepTherapy.css'

class DeepTherapy extends Component {
  constructor(props) {
    super(props);
    this.eliza = new ElizaBot();
    this.state = {
      messages: [{
        user: false,
        text: this.fixup(this.eliza.getInitial()),
        date: new Date(),
      }],
    };
    this.debounced_reply = debounce(this.reply, 1000, { 'maxWait': 5000 });
  }

  handleInput = (input) => {
    input = input.trim();
    if (!input)
      return;
    const messages = this.state.messages.slice(0);
    messages.push({
      user: true,
      text: input,
      date: new Date(),
    });
    this.setState({
      messages,
    });
    this.debounced_reply();
  }

  reply = () => {
    const unreplied = [];
    const messages = this.state.messages.slice(0);
    let iter = messages.length - 1;
    while (messages[iter].user && iter >= 0) {
      unreplied.unshift(messages[iter].text);
      iter--;
    }
    if (unreplied.length === 0)
      return;
    let response = this.eliza.transform(unreplied.join(' '));
    messages.push({
      user: false,
      text: this.fixup(response),
      date: new Date(),
    });
    this.setState({
      messages,
    });
  }

  fixup(text) {
    // Hack fix for weird "?" spacing in elizabot
    return text.replace(/ \?/g, '?');
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
        
      <div className="h1-responsive bg-image back_1  site-section">
<div>
                 <h1 className="h1-responsive font-weight-bold text-center my-4" style={{  visibility: 'hidden'}}>a</h1>
                 <h1 className="h1-responsive font-weight-bold text-center text-white my-4" style={{  opacity:'0.7'}}>Dr. <span className="blue1">R</span><span className="blue2">o</span>bot</h1>
        <div className="containerZ typewriterFX filter font-weight-bold text-center my-4 text-white bg-image back_2" style={{opacity:'0.4'}}>
       <ChatHistory messages={this.state.messages} />
          </div>
        </div>

        <div style={{ float:"left", clear: "both", scrollBehavior:'smooth' }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
        <div className="moveIt">

        <ChatInput inputhandler={this.handleInput} />

      </div>

      </div>

    );
  }
}

export default DeepTherapy;
