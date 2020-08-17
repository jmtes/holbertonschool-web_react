import React, { Fragment } from 'react';

import logo from './dashboard/logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './dashboard/utils';

function App() {
  return (
    <Fragment>
      <div className='App-header'>
        <img src={logo} alt='Logo'></img>
        <h1>School Dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Log in to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
      </div>
    </Fragment>
  );
}

export default App;
