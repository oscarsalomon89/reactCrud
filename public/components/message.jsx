import React, { Component } from 'react';
import moment from "moment";

class Message extends Component{
	constructor(props) {    
	    super(props);
	  }

  render() {
    return (
      <li className="message"><strong>{this.props.name}:</strong>
       {this.props.children} <TimeAgo time={this.props.time}/></li>
    );
  }
}

class TimeAgo extends Component{
  constructor(props) {    
      super(props);
    }

  render() {
    return (
      <small className="time-ago">{moment(this.props.time).fromNow()}</small>
    );
  }
}

export default Message;