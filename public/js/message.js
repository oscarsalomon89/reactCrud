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
    return React.createElement(
      "li",
      { className: "message" },
      React.createElement(
        "strong",
        null,
        this.props.username
      ),
      this.props.children,
      React.createElement(
        "strong",
        null,
        moment(this.props.time).fromNow()
      )
    );
  }
}

export default Message;