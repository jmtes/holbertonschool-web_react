import React from 'react';

import logo from '../assets/logo.jpg';

import './Header.css';

const Header = () => {
  return (
    <div className='App-header'>
      <img src={logo} alt='Logo'></img>
      <h1>School Dashboard</h1>
    </div>
  );
};

export default Header;
