import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Notifications from './Notifications';

describe('Notifications', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find('li');

    expect(listItems.length).toBe(3);
  });

  test('renders the correct text', () => {
    const wrapper = shallow(<Notifications />);
    const text = wrapper.find('p');

    expect(text.text()).toBe('Here is the list of notifications');
  });
});
