import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

let ChatForm = ({ dispatch }) => {
  let input;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'form',
      { onSubmit: e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addMessage(input.username, input.body));
          input.value = '';
        } },
      React.createElement('input', { ref: username => {
          input = username;
        } }),
      React.createElement('input', { ref: body => {
          input = body;
        } }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Add Todo'
      )
    )
  );
};
ChatForm = connect()(ChatForm);

export default ChatForm;