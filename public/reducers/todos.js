//Cambia el estado de la aplicacion
const todo = (action) => {
  switch (action.type) {
    case 'GET_MESSAGES':
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
    case 'ADD_MESSAGE':
      var message = {
        username: action.username.trim(),
        body: action.body.trim(),
      }

      $.ajax({
          url: '/api/todos',
          dataType: 'json',
          type: 'POST',
          data: message,
          success: function(data) {
              return data;
          }.bind(this),
          error: function(xhr, status, err) {
              console.error('/api/todos', status, err.toString());
          }.bind(this)
      });
      return;
  }
}

const todos = (state = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case 'GET_MESSAGES':
      return [
        ...state,
        todo(action)
      ]
    case 'ADD_MESSAGE':
      return [
        ...state,
        todo(action)
      ]
    default:
      return state
  }
}

export default todos
