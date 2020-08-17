import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './dashboard/Notifications';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Notifications />
  </React.StrictMode>,
  document.getElementById('root')
);
