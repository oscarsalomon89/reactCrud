import React, { Component } from 'react';

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
      React.createElement(
        TimeAgo,
        null,
        this.props.time
      )
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
      this.props.children
    );
  }
}

export default Message;