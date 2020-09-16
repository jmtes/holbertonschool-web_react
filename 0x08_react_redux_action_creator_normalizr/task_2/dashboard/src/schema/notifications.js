import { normalize, schema } from 'normalizr';

import notifs from '../../../../notifications.json';

// Define schema
const user = new schema.Entity('users');
const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid'
  }
);
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});
const notifsArray = new schema.Array(notification);

// Normalize JSON data
export const normalizedNotifs = normalize(notifs, notifsArray);

export const getAllNotificationsByUser = (userId) =>
  notifs
    .filter((notif) => notif.author.id === userId)
    .map((notif) => notif.context);
