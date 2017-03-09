import React, { Component } from 'react';
import MessageList from './messageList';
import ChatForm from './chatForm';

class ChatBox extends Component{
  constructor(props) {
    super(props);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.state = {messageList: []};
    this.obtenerMensajes = this.obtenerMensajes.bind(this);
           
  }

  componentDidMount() {
    this.obtenerMensajes(); 
  }

  obtenerMensajes(){
    $.ajax({
      url: "/api/todos",
      dataType: 'json',
      cache: false,
      success: function(data) {          
          this.setState({messageList: data});
      }.bind(this),
      error: function(xhr, status, err) {
          console.error("/api/todos", status, err.toString());
      }.bind(this)
    })
  }

  handleMessageSubmit(message) {  
    this.addNewMessage(message);
  }

  addNewMessage (message) {  
    $.ajax({
        url: '/api/todos',
        dataType: 'json',
        type: 'POST',
        data: message,
        success: function(data) {
            this.obtenerMensajes();
        }.bind(this),
        error: function(xhr, status, err) {
            console.error('/api/todos', status, err.toString());
        }.bind(this)
    });

  }

  render(){
    return (
      <div className="chat-box">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <h1 className="title">Chat con ReactJS</h1>
        <MessageList messageList={this.state.messageList}/>
        <ChatForm onMessageSubmit={this.handleMessageSubmit}/>
      </div>
    );
  }
}

export default ChatBox;