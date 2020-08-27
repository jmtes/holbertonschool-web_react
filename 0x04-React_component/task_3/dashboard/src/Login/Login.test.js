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
    const labels = wrapper.find('label');

    expect(inputs.length).toBe(2);
    expect(labels.length).toBe(2);
  });
});
