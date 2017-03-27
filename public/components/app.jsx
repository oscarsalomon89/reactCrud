import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import ChatBox from './chatBox';
import reducer from '../reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ChatBox />
  </Provider>,
  document.getElementById('root')
);