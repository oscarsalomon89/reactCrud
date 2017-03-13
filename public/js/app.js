import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import store from './store';
import ChatBox from './chatBox';

ReactDOM.render(React.createElement(
  Provider,
  null,
  React.createElement(ChatBox, null)
), document.getElementById('root'));