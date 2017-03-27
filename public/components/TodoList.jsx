import React, { PropTypes } from 'react';
import Message from './Message';

const TodoList = ({ todos}) => (
  <ul>
    {
      todos.map((message,i) => {
        return <Message key={i} name={message.username} time={message.time}>
              {message.body}
            </Message>
      })
    }
  </ul>
)

export default TodoList;