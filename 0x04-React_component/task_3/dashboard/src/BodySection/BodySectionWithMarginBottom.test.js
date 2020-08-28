import React from 'react';
import { mount } from 'enzyme';

import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
  test('should properly render children', () => {
    const wrapper = mount(
      <BodySectionWithMarginBottom title='heading'>
        <p>paragraph 0</p>
        <p>paragraph 1</p>
      </BodySectionWithMarginBottom>
    );
    const heading = wrapper.find('h2');
    const p = wrapper.find('p');

    expect(heading.length).toBe(1);
    expect(heading.text()).toBe('heading');

    expect(p.length).toBe(2);
    expect(p.at(0).text()).toBe('paragraph 0');
    expect(p.at(1).text()).toBe('paragraph 1');
  });
});
