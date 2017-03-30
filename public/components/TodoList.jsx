import React from 'react';
import Message from './Message';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  render() {
    return (
      <ul className="media-list">
        {
	      this.props.todos.map((message,i) => {
	        return <Message key={i} name={message.username} time={message.time}>
	              {message.body}
	            </Message>
	      })
	    }
      </ul>
    )
  }
}

export default TodoList

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