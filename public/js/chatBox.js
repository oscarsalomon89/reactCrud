import React, { Component } from 'react';
import TodoList from './TodoList';
import ChatForm from './chatForm';

const ChatBox = () => React.createElement(
  'div',
  { className: 'chat-box' },
  React.createElement(
    'div',
    { className: 'App-header' },
    React.createElement(
      'h2',
      null,
      'Welcome to React'
    )
  ),
  React.createElement(
    'h1',
    { className: 'title' },
    'Chat with ReactJS'
  ),
  React.createElement(TodoList, null),
  React.createElement(ChatForm, null)
);

export default ChatBox;