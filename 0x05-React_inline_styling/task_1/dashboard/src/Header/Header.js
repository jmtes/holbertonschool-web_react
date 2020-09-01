import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <div className={css(styles.header)}>
      <img src={logo} alt='Logo' className={css(styles.logo)}></img>
      <h1 className={css(styles.heading)}>School Dashboard</h1>
    </div>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottom: '3px solid #e1345b',
    height: '250px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logo: {
    width: '200px',
    height: '200px'
  },
  heading: {
    display: 'inline',
    position: 'relative',
    color: '#e1345b'
  }
});

export default Header;
