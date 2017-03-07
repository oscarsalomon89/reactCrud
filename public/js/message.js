import React, { Component } from 'react';
import moment from "moment";

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
        this.props.name,
        ":"
      ),
      this.props.children,
      " ",
      React.createElement(TimeAgo, { time: this.props.time })
    );
  }
}

class TimeAgo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "small",
      { className: "time-ago" },
      moment(this.props.time).fromNow()
    );
  }
}

export default Message;