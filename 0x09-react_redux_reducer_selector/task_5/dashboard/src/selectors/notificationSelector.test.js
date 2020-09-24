import { Map } from 'immutable';

import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications
} from './notificationSelector';

import notificationReducer from '../reducers/notificationReducer';

import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes';

describe('Notification Selector', () => {
  const initialState = Map({
    notifications: [],
    filter: 'DEFAULT'
  });

  const data = [
    {
      id: 1,
      type: 'default',
      value: 'New course available'
    },
    {
      id: 2,
      type: 'urgent',
      value: 'New resume available'
    },
    {
      id: 3,
      type: 'urgent',
      value: 'New data available'
    }
  ];

  const state = notificationReducer(initialState, {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data
  });

  test('filterTypeSelected works as expected', () => {
    const filterType = filterTypeSelected(state);

    expect(filterType).toBe('DEFAULT');
  });

  test('getNotifications works as expected', () => {
    const notifs = getNotifications(state).toJS();

    expect(notifs[1]).toEqual({ ...data[0], isRead: false });
    expect(notifs[2]).toEqual({ ...data[1], isRead: false });
    expect(notifs[3]).toEqual({ ...data[2], isRead: false });
  });

  test('getUnreadNotifications works as expected', () => {
    const index = 2;

    // Mark notif at index 2 as read
    const newState = notificationReducer(state, {
      type: MARK_AS_READ,
      index: 2
    });

    const notifs = getUnreadNotifications(newState).toJS();

    // Expect notification with id of 2 to not ne returned
    expect(notifs[1]).toEqual({ ...data[0], isRead: false });
    expect(notifs[2]).toEqual(undefined);
    expect(notifs[3]).toEqual({ ...data[2], isRead: false });
  });
});
