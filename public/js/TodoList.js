import React, { PropTypes } from 'react';
import Message from './Message';

const TodoList = ({ todos }) => React.createElement(
  'ul',
  null,
  todos.map((message, i) => {
    return React.createElement(
      Message,
      { key: i, name: message.username, time: message.time },
      message.body
    );
  })
);

export default TodoList;