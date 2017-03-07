import React, { Component } from 'react';

class Message extends Component{
	constructor(props) {    
	    super(props);
	  }

  render() {
    return (
      <li className="message"><strong>{this.props.name}:</strong>
       {this.props.children} <TimeAgo>{this.props.time}</TimeAgo></li>
    );
  }
}

class TimeAgo extends Component{
  constructor(props) {    
      super(props);
    }

  render() {
    return (
      <small className="time-ago">{this.props.children}</small>
    );
  }
}

export default Message;