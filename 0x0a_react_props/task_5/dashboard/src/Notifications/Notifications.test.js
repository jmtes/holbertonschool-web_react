import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.exists()).toBe(true);
  });

  describe('displayDrawer is true', () => {
    // OLD TESTS START
    test('renders three list items', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const listItems = wrapper.find(NotificationItem);

      expect(listItems.length).toBe(3);
    });

    test('renders the correct text', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const text = wrapper.find('p');

      expect(text.text()).toBe('Here is the list of notifications');
    });

    test('NotificationItem renders correct html', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);

      const firstNotifItem = wrapper.find(NotificationItem).at(0);

      expect(firstNotifItem.props()).toHaveProperty('type', 'default');
      expect(firstNotifItem.props()).toHaveProperty(
        'value',
        'New course available'
      );
    });

    // OLD TESTS END

    test('menu item is displayed', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const menuItem = wrapper.find('.menuItem');

      expect(menuItem.length).toBe(1);
    });

    test('notifications div is displayed', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const notifs = wrapper.find('div.Notifications');

      expect(notifs.length).toBe(1);
    });
  });

  describe('displayDrawer is false', () => {
    test('menu item is displayed', () => {
      const wrapper = shallow(<Notifications />);
      const menuItem = wrapper.find('.menuItem');

      expect(menuItem.length).toBe(1);
    });

    test('notifications div is not displayed', () => {
      const wrapper = shallow(<Notifications />);
      const notifs = wrapper.find('div.Notifications');

      expect(notifs.length).toBe(0);
    });
  });
});
