import React, { Component } from 'react';
import MessageList from '../containers/messageList';
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
  React.createElement(MessageList, null),
  React.createElement(ChatForm, null)
);

export default ChatBox;