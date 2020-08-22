import React, { Fragment } from 'react';

import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <Fragment>
      <Header />
      <div className='App-body'>
        <Login />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
