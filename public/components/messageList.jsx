import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component{
	constructor(props) {    
	    super(props);
	  }

  render() {
    return (
      <ul className="message-list">
      	{
          this.props.messageList.map((message,i) => {
            return <Message key={i} name={message.username} time={message.time}>
		            	{message.body}
		            </Message>
          })
        }
      </ul>
    );
  }
}

export default MessageList;