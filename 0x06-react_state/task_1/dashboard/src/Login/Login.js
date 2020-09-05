import React, { Fragment, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const Login = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);

  const handleLoginSubmit = (ev) => {
    console.log('handleloginsubmit');
    setIsLoggedIn(true);

    ev.preventDefault();
  };

  return (
    <Fragment>
      <p>Log in to access the full dashboard</p>
      <div>
        <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
          <div className={css(styles['input-group'])}>
            <label
              htmlFor='email'
              className={css(styles['email-label'], styles.label)}
            >
              Email:
            </label>
            <input type='email' name='email' id='email' />
          </div>

          <div className={css(styles['input-group'])}>
            <label htmlFor='password' className={css(styles.label)}>
              Password:
            </label>
            <input type='password' name='password' id='password' />
          </div>

          <input type='submit' className={css(styles.button)} />
        </form>
      </div>
    </Fragment>
  );
};

Login.displayName = 'Login';

const styles = StyleSheet.create({
  label: {
    '@media (min-width: 901px)': {
      padding: '1rem'
    },
    '@media (max-width: 900px)': {
      marginRight: '0.5rem'
    }
  },
  'email-label': {
    padding: '0'
  },
  button: {
    '@media (min-width: 901px)': {
      margin: '0 2rem'
    },
    '@media (max-width: 900px)': {
      margin: '0.25rem 0'
    }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start'
  },
  'input-group': {
    '@media (max-width: 900px)': {
      margin: '0.25rem 0'
    }
  }
});

Login.propTypes = {
  isLoggedIn: PropTypes.bool
};

Login.defaultProps = {
  isLoggedIn: false
};

export default Login;
