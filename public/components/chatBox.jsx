import React, { Component } from 'react';
import TodoList from './TodoList';
import ChatForm from './chatForm';

const ChatBox = () => (  

  <div className="chat-box">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <h1 className="title">Chat with ReactJS</h1>
        <TodoList />
        <ChatForm />
      </div>
)

export default ChatBox;