import notifs from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) =>
  notifs
    .filter((notif) => notif.author.id === userId)
    .map((notif) => notif.context);

export default getAllNotificationsByUser;
