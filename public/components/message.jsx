import React, { PropTypes } from 'react';
import moment from "moment";

const Message = ({ props }) => (
  <li className="message"><strong>{props.name}:</strong>
       {moment(props.time).fromNow()} </li>
)

Message.propTypes = {
  text: PropTypes.string.isRequired
}

export default Message