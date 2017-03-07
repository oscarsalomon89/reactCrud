import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'ul',
      { className: 'message-list' },
      this.props.messageList.map((message, i) => {
        return React.createElement(
          Message,
          { key: i, name: message.username, time: message.time },
          message.body
        );
      })
    );
  }
}

export default MessageList;