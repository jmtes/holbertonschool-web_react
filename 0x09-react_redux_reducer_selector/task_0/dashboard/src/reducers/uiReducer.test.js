import uiReducer from './uiReducer';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  };

  test('state does not change when no action is passed', () => {
    const state = uiReducer(initialState);

    expect(state).toEqual(initialState);
  });

  test('state does not change when unrelated action is passed', () => {
    const state = uiReducer(initialState, { action: 'SELECT_COURSE' });

    expect(state).toEqual(initialState);
  });

  test('state changes as expected when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const state = uiReducer(initialState, {
      type: DISPLAY_NOTIFICATION_DRAWER
    });

    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true
    });
  });

  test('state changes as expected when HIDE_NOTIFICATION_DRAWER is passed', () => {
    const state = uiReducer(
      { ...initialState, isNotificationDrawerVisible: true },
      { type: HIDE_NOTIFICATION_DRAWER }
    );

    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: false
    });
  });

  test('state changes as expected when LOGIN_SUCCESS is passed', () => {
    const state = uiReducer(initialState, { type: LOGIN_SUCCESS });

    expect(state).toEqual({ ...initialState, isUserLoggedIn: true });
  });

  test('state changes as expected when LOGIN_FAILURE is passed', () => {
    const state = uiReducer(initialState, { type: LOGIN_FAILURE });

    expect(state).toEqual({ ...initialState, isUserLoggedIn: false });
  });

  test('state changes as expected when LOGOUT is passed', () => {
    const state = uiReducer(
      { ...initialState, isUserLoggedIn: true },
      { type: LOGOUT }
    );

    expect(state).toEqual({ ...initialState, isUserLoggedIn: false });
  });
});
