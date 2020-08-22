import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find(NotificationItem);

    expect(listItems.length).toBe(3);
  });

  test('renders the correct text', () => {
    const wrapper = shallow(<Notifications />);
    const text = wrapper.find('p');

    expect(text.text()).toBe('Here is the list of notifications');
  });

  test('NotificationItem renders correct html', () => {
    const wrapper = shallow(<Notifications />);

    const firstNotifItem = wrapper.find(NotificationItem).at(0);

    expect(firstNotifItem.props()).toHaveProperty('type', 'default');
    expect(firstNotifItem.props()).toHaveProperty(
      'value',
      'New course available'
    );
  });
});
