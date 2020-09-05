import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.exists()).toBe(true);
  });

  describe('displayDrawer is true', () => {
    test('menu item is displayed', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const menuItem = wrapper.find('[data-testid="menu-item"]');

      expect(menuItem.length).toBe(1);
    });

    test('notifications div is displayed', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const notifs = wrapper.find('[data-testid="notifs"]');

      expect(notifs.length).toBe(1);
    });
  });

  describe('displayDrawer is false', () => {
    test('menu item is displayed', () => {
      const wrapper = shallow(<Notifications />);
      const menuItem = wrapper.find('[data-testid="menu-item"]');

      expect(menuItem.length).toBe(1);
    });

    test('notifications div is not displayed', () => {
      const wrapper = shallow(<Notifications />);
      const notifs = wrapper.find('div.Notifications');

      expect(notifs.length).toBe(0);
    });
  });

  describe('listNotifications is empty', () => {
    test('renders correctly if empty array is passed', () => {
      const wrapper = shallow(<Notifications />);
      const notifs = wrapper.find(NotificationItem);

      expect(notifs.length).toBe(0);
    });

    test('renders correctly if listNotifications prop not specified', () => {
      const wrapper = shallow(<Notifications />);
      const notifs = wrapper.find(NotificationItem);

      expect(notifs.length).toBe(0);
    });
  });

  describe('listNotifications is not empty', () => {
    const testNotifs = [
      { id: 0, type: 'default', value: 'New project available' },
      {
        id: 1,
        type: 'urgent',
        html: { __html: '<strong>Project Deadline Approaching</strong>' }
      }
    ];

    const wrapper = shallow(
      <Notifications listNotifications={testNotifs} displayDrawer={true} />
    );
    const notifs = wrapper.find(NotificationItem);

    test('renders correct amount of notifications', () => {
      expect(notifs.length).toBe(2);
    });

    test('renders notifications with correct attributes', () => {
      const notif0 = notifs.at(0);
      const notif1 = notifs.at(1);

      expect(notif0.props()).toHaveProperty('type', 'default');
      expect(notif0.props()).toHaveProperty('value', 'New project available');
      expect(notif0.props()).toHaveProperty('html', undefined);

      expect(notif1.props()).toHaveProperty('type', 'urgent');
      expect(notif1.props()).toHaveProperty('value', '');
      expect(notif1.props()).toHaveProperty('html', {
        __html: '<strong>Project Deadline Approaching</strong>'
      });
    });
  });

  describe('message displays properly', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const noNewNotifs = wrapper.find('[data-testid="notifs"] p');

    expect(noNewNotifs.length).toBe(1);
    expect(noNewNotifs.text()).toBe('No new notifications for now');
  });

  test('markAsRead calls console.log', () => {
    console.log = jest.fn();

    const wrapper = shallow(<Notifications />);
    wrapper.instance().markAsRead(0);

    expect(console.log).toHaveBeenCalledWith(
      `Notification 0 has been marked as read`
    );
  });

  test('updates only if there are new notifs', () => {
    const initialNotifs = [
      { id: 0, type: 'default', value: 'test 0' },
      { id: 1, type: 'default', value: 'test 1' }
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={initialNotifs} />
    );

    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      'shouldComponentUpdate'
    );

    expect(shouldComponentUpdate).toHaveBeenCalledTimes(0);

    // listNotifications is longer
    const longerNotifs = initialNotifs.slice();
    longerNotifs.push({ id: 2, type: 'default', value: 'test 2' });

    wrapper.setProps({ listNotifications: longerNotifs });

    expect(shouldComponentUpdate).toHaveBeenCalledTimes(1);
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);

    // listNotifications stays same length
    const sameNotifs = longerNotifs.slice();

    wrapper.setProps({ listNotifications: sameNotifs });

    expect(shouldComponentUpdate).toHaveBeenCalledTimes(2);
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);

    // listNotifications is shorter
    const shorterNotifs = sameNotifs.slice();
    shorterNotifs.pop();

    wrapper.setProps({ listNotifications: sameNotifs });

    expect(shouldComponentUpdate).toHaveBeenCalledTimes(3);
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
  });

  test('clicking menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );

    const menuItem = wrapper.find('[data-testid="menu-item"]');
    expect(menuItem.length).toBe(1);

    menuItem.simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  test('clicking close button calls hideDisplayDrawer', () => {
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );

    const close = wrapper.find('[data-testid="close-notifs"]');
    expect(close.length).toBe(1);

    close.simulate('click');
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });
});
