import getAllNotificationsByUser from './notifications';

describe('notifications schema', () => {
  test('returns the correct data', () => {
    const expected = [
      {
        guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
        isRead: true,
        type: 'urgent',
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
      },
      {
        guid: '280913fe-38dd-4abd-8ab6-acdb4105f922',
        isRead: false,
        type: 'urgent',
        value:
          'Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed'
      }
    ];

    const notifs = getAllNotificationsByUser('5debd764a7c57c7839d722e9');

    // Test returned length
    expect(notifs.length).toBe(2);

    // Test returned content
    expect(
      notifs.some(
        (notif) => notif.guid === '2d8e40be-1c78-4de0-afc9-fcc147afd4d2'
      )
    ).toBe(true);

    expect(
      notifs.some(
        (notif) => notif.guid === '280913fe-38dd-4abd-8ab6-acdb4105f922'
      )
    ).toBe(true);

    // Make sure array items have correct values
    expect(notifs.some((notif) => notif.isRead === undefined)).toBe(false);
    expect(notifs.some((notif) => notif.type === undefined)).toBe(false);
    expect(notifs.some((notif) => notif.value === undefined)).toBe(false);

    expect(notifs.some((notif) => Object.keys(notif).length !== 4)).toBe(false);
  });
});
