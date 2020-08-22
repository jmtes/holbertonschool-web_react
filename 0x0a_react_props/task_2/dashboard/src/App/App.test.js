import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders Notifications component', () => {
    const wrapper = shallow(<App />);
    const notifs = wrapper.find(Notifications);

    expect(notifs.length).toBe(1);
  });

  test('renders Header component', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find(Header);

    expect(header.length).toBe(1);
  });

  test('renders Login component', () => {
    const wrapper = shallow(<App />);
    const login = wrapper.find(Login);

    expect(login.length).toBe(1);
  });

  test('renders Footer component', () => {
    const wrapper = shallow(<App />);
    const footer = wrapper.find(Footer);

    expect(footer.length).toBe(1);
  });
});
