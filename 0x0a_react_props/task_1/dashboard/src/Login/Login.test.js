import React from 'react';
import { shallow } from 'enzyme';

import Login from './Login';

describe('Login', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders two input tags', () => {
    const wrapper = shallow(<Login />);
    const inputs = wrapper.find('input');

    expect(inputs.length).toBe(2);
  });

  test('renders two label tags', () => {
    const wrapper = shallow(<Login />);
    const labels = wrapper.find('label');

    expect(labels.length).toBe(2);
  });
});
