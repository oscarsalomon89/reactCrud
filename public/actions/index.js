/*
 * creadores de acciones
 */

export const addMessage = (username,body) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  username,
  body
})