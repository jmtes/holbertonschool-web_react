import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

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

  test('course list not displayed by default', () => {
    const wrapper = shallow(<App />);
    const courseList = wrapper.find(CourseList);

    expect(courseList.length).toBe(0);
  });

  test('if logged in, course list is displayed and login form is not', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);

    const login = wrapper.find(Login);
    const courseList = wrapper.find(CourseList);

    expect(login.length).toBe(0);
    expect(courseList.length).toBe(1);
  });

  test('logout keyboard shortcut works', () => {
    const map = {};
    window.addEventListener = jest.fn((ev, cb) => {
      map[ev] = cb;
    });

    window.alert = jest.fn();

    const testProps = {
      logOut: jest.fn()
    };
    const wrapper = shallow(<App {...testProps} />);

    map.keydown({ key: 'Control' });
    map.keydown({ key: 'h' });

    expect(testProps.logOut).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });

  describe('correctly handles displayDrawer state', () => {
    test('defaults to false', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.state()).toHaveProperty('displayDrawer', false);
    });

    test('handleDisplayDrawer and handleHideDrawer work as expected', () => {
      const wrapper = shallow(<App />);

      wrapper.instance().handleDisplayDrawer();
      expect(wrapper.state()).toHaveProperty('displayDrawer', true);

      wrapper.instance().handleHideDrawer();
      expect(wrapper.state()).toHaveProperty('displayDrawer', false);
    });
  });
});
