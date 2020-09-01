import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { getFullYear, getFooterCopy } from '../utils/utils';

const Footer = () => {
  return (
    <div className={css(styles.footer)}>
      <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
    </div>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    borderTop: '3px solid #e1354b',
    textAlign: 'center',
    fontStyle: 'italic',
    padding: '1rem 0',
    backgroundColor: 'white'
  }
});

export default Footer;
