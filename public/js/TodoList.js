import React, { Component } from 'react';
import Message from './Message';
import { obtenerMensajes } from '../actions';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    $.ajax({
      url: "/api/todos",
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ todos: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("/api/todos", status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return React.createElement(
      'ul',
      { className: 'media-list' },
      this.state.todos.map((message, i) => {
        return React.createElement(
          Message,
          { key: i, username: message.username, time: message.time },
          message.body
        );
      })
    );
  }
}

export default TodoList;

/*const TodoList = ({ todos}) => (
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

export default TodoList;*/