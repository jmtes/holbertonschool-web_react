import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders header div', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find('div.App-header');

    expect(header.exists()).toBe(true);
  });

  test('renders body div', () => {
    const wrapper = shallow(<App />);
    const body = wrapper.find('div.App-body');

    expect(body.exists()).toBe(true);
  });

  test('renders footer div', () => {
    const wrapper = shallow(<App />);
    const footer = wrapper.find('div.App-footer');

    expect(footer.exists()).toBe(true);
  });
});
