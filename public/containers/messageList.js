import { connect } from 'react-redux'
import { obtenerMensajes } from '../actions'
import TodoList from '../js/TodoList'

const getVisibleTodos = (todos) => {    
    obtenerMensajes();      
    return todos;  
  }


const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos)
})

const mapDispatchToProps = {
  todos: obtenerMensajes
}

const MessageList = connect(
  mapStateToProps
)(TodoList)

export default MessageList