import React, { PropTypes } from 'react';
import moment from "moment";

const Message = ({ props }) => React.createElement(
  "li",
  { className: "message" },
  React.createElement(
    "strong",
    null,
    props.name,
    ":"
  ),
  moment(props.time).fromNow(),
  " "
);

Message.propTypes = {
  text: PropTypes.string.isRequired
};

export default Message;