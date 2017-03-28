import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

let ChatForm = ({ dispatch }) => {
  let inputU, inputB;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'form',
      { onSubmit: e => {
          e.preventDefault();
          if (!inputU.value.trim()) {
            return;
          }
          dispatch(addMessage(inputU.value, inputB.value));
          inputU.value = '';
          inputB.value = '';
        } },
      React.createElement('input', { ref: username => {
          inputU = username;
        } }),
      React.createElement('input', { ref: body => {
          inputB = body;
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