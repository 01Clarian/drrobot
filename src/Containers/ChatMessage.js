import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';

class ChatMessage extends Component {
  render() {
    const message = this.props.message;
    let author = 'DR ROBOT';
    let className = 'eliza';
    if (message.user) {
     return null;
    }

    return (
      <Comment className={className}>
          <Comment.Author as='a'>{author}</Comment.Author>
          <Comment.Metadata>
            <div>Today at {message.date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}</div>
          </Comment.Metadata>
          <Comment.Text>{message.text}</Comment.Text>
      </Comment>
    );
  }
}

export default ChatMessage;
