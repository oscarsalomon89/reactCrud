/*
 * creadores de acciones
 */

export const addMessage = (username,body) => ({
  type: 'ADD_MESSAGE',
  username: username,
  body:body
})

export const obtenerMensajes = () => {
    type: 'GET_MESSAGES'  
}