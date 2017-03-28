import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'

let ChatForm = ({ dispatch }) => {
  let inputU, inputB

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!inputU.value.trim()) {
          return
        }
        dispatch(addMessage(inputU.value,inputB.value));
        inputU.value = '';
        inputB.value = '';
      }}>
        <input ref={username => {
          inputU = username
        }} />
        <input ref={body => {
          inputB = body
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