import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders an image', () => {
    const wrapper = shallow(<Header />);
    const image = wrapper.find('img');

    expect(image.exists()).toBe(true);
  });

  test('renders an h1', () => {
    const wrapper = shallow(<Header />);
    const h1 = wrapper.find('h1');

    expect(h1.exists()).toBe(true);
    expect(h1.text()).toBe('School Dashboard');
  });
});
