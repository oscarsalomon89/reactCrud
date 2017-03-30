//import React, { PropTypes } from 'react';
import React, { Component } from 'react';
import moment from "moment";

/*const Message = ({ props }) => (
  <li className="message"><strong>{props.body}:</strong>
       {moment(props.time).fromNow()} </li>
)

export default Message*/


class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="message">
        <strong>{this.props.username}</strong> 
        {this.props.children}
        <strong>{moment(this.props.time).fromNow()}</strong>
      </li>
    )
  }
}

export default Message

