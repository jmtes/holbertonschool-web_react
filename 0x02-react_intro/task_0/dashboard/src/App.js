import React, { Fragment } from 'react';
import logo from './logo.jpg';
import './App.css';

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
        <p>Copyright 2020 - Holberton School</p>
      </div>
    </Fragment>
  );
}

export default App;
