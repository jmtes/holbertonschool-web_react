import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBe(true);
  });

  test('copy text contains at least "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    const p = wrapper.find('p');

    const re = /Copyright/;

    expect(re.test(wrapper.text())).toBe(true);
  });
});
