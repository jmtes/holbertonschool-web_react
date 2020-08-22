import React, { Fragment } from 'react';

import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <div className='App-body'>
        <p>Log in to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type='email' name='email' id='email' />

        <label htmlFor='password'>Password:</label>
        <input type='password' name='password' id='password' />

        <button>OK</button>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
