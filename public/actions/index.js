/*
 * creadores de acciones
 */

export const addMessage = (username,body) => {
  var message = {
      username: username.trim(),
      body: body.trim(),
    }

  $.ajax({
        url: '/api/todos',
        dataType: 'json',
        type: 'POST',
        data: message,
        success: function(data) {
            //dispatch(obtenerMensajes());
        }.bind(this),
        error: function(xhr, status, err) {
            console.error('/api/todos', status, err.toString());
        }.bind(this)
    });
}

export const obtenerMensajes = () => {

  $.ajax({
      url: "/api/todos",
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
          console.error("/api/todos", status, err.toString());
      }.bind(this)
    })
}