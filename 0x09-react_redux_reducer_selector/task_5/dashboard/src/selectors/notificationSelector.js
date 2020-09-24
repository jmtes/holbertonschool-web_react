import { Map } from 'immutable';

export const filterTypeSelected = (state) => state.get('filter');

export const getNotifications = (state) =>
  Map(state.getIn(['notifications', 'entities', 'notifications']));

export const getUnreadNotifications = (state) => {
  return Map(
    state.getIn(['notifications', 'entities', 'notifications'])
  ).filter((notif) => notif.isRead === false);
};
