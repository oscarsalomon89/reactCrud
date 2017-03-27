import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'

let ChatForm = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addMessage(input.username,input.body))
        input.value = ''
      }}>
        <input ref={username => {
          input = username
        }} />
        <input ref={body => {
          input = body
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
ChatForm = connect()(ChatForm)

export default ChatForm