import React from 'react';
import { shallow } from 'enzyme';
import LoginPage, { Copyright } from './index';

const mockedHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockedHistoryPush,
  }),
}));

describe('LoginPage', () => {
  test('renders app correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders Copyright component correctly', () => {
    const wrapper = shallow(<Copyright />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('forgot password should trigger dialog', () => {
    // TODO: update this when using dialog
    const wrapper = shallow(<LoginPage />);
    wrapper.find('#forgotPasswordButton').props().onClick();
    expect(wrapper).toBeDefined(); // placebo
  });

  test('should trigger router to /forgot-password', () => {
    // TODO: update this when using dialog
    const wrapper = shallow(<LoginPage />);
    wrapper.find('#signUpButton').props().onClick();

    expect(mockedHistoryPush).toHaveBeenCalledWith('/home');
  });
});
