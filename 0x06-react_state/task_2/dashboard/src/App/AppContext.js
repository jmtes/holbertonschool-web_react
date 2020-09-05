import { createContext } from 'react';

const user = {
  email: '',
  password: '',
  isLoggedIn: false
};

const logOut = () => {};

const appContext = createContext({ user, logOut });

export default appContext;
