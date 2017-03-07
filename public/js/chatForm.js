import React, { Component } from 'react';

class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    var message = {
      username: this.refs.username.value.trim(),
      body: this.refs.body.value.trim(),
      time: new Date()
    };

    if (!message.username || !message.body) {
      return;
    }

    this.props.onMessageSubmit(message);
    this.refs.body.value = '';
    this.refs.username.value = '';
    this.refs.username.focus();
  }

  render() {
    return React.createElement(
      'form',
      { className: 'chat-form', onSubmit: this.handleSubmit },
      React.createElement('input', { className: 'input username-input', type: 'text', placeholder: 'Nombre de usuario', ref: 'username' }),
      React.createElement('input', { className: 'input body-input', type: 'text', placeholder: '\xA1Escribe algo! :D', ref: 'body' }),
      React.createElement(
        'button',
        { className: 'button' },
        'Enviar'
      )
    );
  }
}

export default ChatForm;