import React, { Component } from 'react';
import MessageList from './messageList';
import ChatForm from './chatForm';

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.state = { messageList: [] };
    this.obtenerMensajes = this.obtenerMensajes.bind(this);
  }

  componentDidMount() {
    this.obtenerMensajes();
  }

  obtenerMensajes() {
    $.ajax({
      url: "/api/todos",
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ messageList: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("/api/todos", status, err.toString());
      }.bind(this)
    });
  }

  handleMessageSubmit(message) {
    this.addNewMessage(message);
  }

  addNewMessage(message) {
    $.ajax({
      url: '/api/todos',
      dataType: 'json',
      type: 'POST',
      data: message,
      success: function (data) {
        this.obtenerMensajes();
      }.bind(this),
      error: function (xhr, status, err) {
        console.error('/api/todos', status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return React.createElement(
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
        'Chat con ReactJS'
      ),
      React.createElement(MessageList, { messageList: this.state.messageList }),
      React.createElement(ChatForm, { onMessageSubmit: this.handleMessageSubmit })
    );
  }
}

export default ChatBox;