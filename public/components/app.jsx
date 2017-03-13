import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import store from './store';
import ChatBox from './chatBox';

ReactDOM.render(
  <Provider>
    <ChatBox />
  </Provider>,
  document.getElementById('root')
);