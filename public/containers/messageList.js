import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../js/TodoList'

const getVisibleTodos = (todos) => {
      $.ajax({
      url: "/api/todos",
      dataType: 'json',
      cache: false,
      success: function(data) {
        return data;
      }.bind(this),
      error: function(xhr, status, err) {
          console.error("/api/todos", status, err.toString());
      }.bind(this)
    })    
    return todos;  
  }


const mapStateToProps = (state) => ({  
  todos: getVisibleTodos(state.todos)
})

const MessageList = connect(
  mapStateToProps
)(TodoList)

export default MessageList