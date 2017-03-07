import React, { Component } from 'react';

class ChatForm extends Component{
  constructor(props) {    
	    super(props);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }

  handleSubmit(event) {
    event.preventDefault();

    var message = {
      username: this.refs.username.value.trim(),
      body: this.refs.body.value.trim(),
      time: new Date(),
    }

    if (!message.username || !message.body) {
      return;
    }

    this.props.onMessageSubmit(message);
    this.refs.body.value = '';
    this.refs.username.value = '';
    this.refs.username.focus();
  }

  render() {
    return (
      <form className="chat-form" onSubmit={this.handleSubmit}>
        <input className="input username-input" type="text" placeholder="Nombre de usuario" ref="username"/>
        <input className="input body-input" type="text" placeholder="¡Escribe algo! :D" ref="body"/>
        <button className="button">Enviar</button>
      </form>
    );
  }
}

export default ChatForm;