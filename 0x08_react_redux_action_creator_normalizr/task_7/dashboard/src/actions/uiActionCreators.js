import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';

import apiResponse from '../../dist/login-success.json';

export const login = (email, password) =>
  dispatch({
    type: LOGIN,
    user: { email, password }
  });

export const loginRequest = (email, password) => {
  login(email, password);
};

export const logout = () => dispatch({ type: LOGOUT });

export const loginSuccess = () => dispatch({ type: LOGIN_SUCCESS });

export const loginFailure = () => dispatch({ type: LOGIN_FAILURE });

export const displayNotificationDrawer = () =>
  dispatch({
    type: DISPLAY_NOTIFICATION_DRAWER
  });

export const hideNotificationDrawer = () =>
  dispatch({
    type: HIDE_NOTIFICATION_DRAWER
  });
