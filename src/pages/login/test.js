import React from 'react';
import { useSelector } from 'react-redux';
import { shallow, mount } from 'enzyme';
import ErrorOutlineOutlined from '@material-ui/icons/ErrorOutlineOutlined';

import { requestLoginAction } from '../../state/actions';

import LoginPage, { Copyright } from './index';

const mockedHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockedHistoryPush,
  }),
}));

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock('../../state/actions');

describe('LoginPage', () => {
  const mockedEvent = (value) => ({ target: { value } });

  test('renders correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders Copyright component correctly', () => {
    const wrapper = shallow(<Copyright />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should trigger redirect to resetPassword page', () => {
    const wrapper = shallow(<LoginPage />);
    wrapper.find('#forgotPasswordButton').props().onClick();

    expect(mockedHistoryPush).toHaveBeenCalledWith('/resetPassword');
  });

  test('should trigger redirect to signUp page', () => {
    const wrapper = shallow(<LoginPage />);
    wrapper.find('#signUpButton').props().onClick();

    expect(mockedHistoryPush).toHaveBeenCalledWith('/signUp');
  });

  test('should dispatch action properly', () => {
    const wrapper = shallow(<LoginPage />);
    const mockedEmail = 'mockedEmail@email.com';
    const mockedPassword = 'mockedPassword';

    wrapper.find('#email').props().onChange(mockedEvent(mockedEmail));
    wrapper.find('#password').props().onChange(mockedEvent(mockedPassword));
    wrapper.find('#rememberMe').props().onChange({ target: { checked: true } });
    wrapper.find('#submitButton').props().onClick();
    wrapper.find('#password').props().onKeyPress({ key: 'a' });

    expect(requestLoginAction).toHaveBeenCalledWith(mockedEmail, mockedPassword, true);
    expect(requestLoginAction).toHaveBeenCalledTimes(1);

    wrapper.find('#password').props().onKeyPress({ key: 'Enter' });
    expect(requestLoginAction).toHaveBeenCalledTimes(2);
  });

  test('should show UI outline errors', () => {
    const wrapper = shallow(<LoginPage />);
    const mockedWrongEmail = 'mockedWrongEmail';
    const mockedEmail = 'mockedEmail@email.com';
    const mockedPassword = 'mockedPassword';

    wrapper.find('#email').props().onChange(mockedEvent(mockedWrongEmail));
    wrapper.find('#password').props().onChange(mockedEvent(mockedPassword));
    wrapper.find('#submitButton').props().onClick();

    expect(wrapper.find('#email').props().error).toBe(true);
    expect(wrapper.find('#password').props().error).toBe(false);

    const mockedEventName = (name) => ({ target: { name } });
    wrapper.find('#email').props().onClick(mockedEventName('email'));

    expect(wrapper.find('#email').props().error).toBe(false);
    expect(wrapper.find('#password').props().error).toBe(false);

    wrapper.find('#email').props().onChange(mockedEvent(mockedEmail));
    wrapper.find('#password').props().onChange(mockedEvent());
    wrapper.find('#submitButton').props().onClick();

    expect(wrapper.find('#email').props().error).toBe(false);
    expect(wrapper.find('#password').props().error).toBe(true);

    wrapper.find('#email').props().onClick(mockedEventName('password'));
    expect(wrapper.find('#password').props().error).toBe(false);

    expect(requestLoginAction).not.toHaveBeenCalled();
  });

  test('should show email/password error', () => {
    const mockedEmail = 'mockedEmail@email.com';
    const mockedPassword = 'mockedPassword';
    useSelector.mockImplementation(() => undefined);

    const wrapper = mount(<LoginPage />);

    wrapper.find('#email').at(0).props().onChange(mockedEvent(mockedEmail));
    wrapper.find('#password').at(0).props().onChange(mockedEvent(mockedPassword));
    wrapper.update();
    wrapper.find('#submitButton').at(0).props().onClick();

    expect(requestLoginAction).toHaveBeenCalledWith(mockedEmail, mockedPassword, false);
    expect(wrapper.find('#email').at(0).props().error).toBe(false);
    expect(wrapper.find('#password').at(0).props().error).toBe(false);
    expect(wrapper.find(ErrorOutlineOutlined)).toEqual({});

    useSelector.mockImplementation(() => 'login error');
    wrapper.find('#email').at(0).props().onChange(mockedEvent());
    wrapper.find('#password').at(0).props().onChange(mockedEvent());
    wrapper.setProps(); // updates the useSelector
    wrapper.update(); // updates the useState
    wrapper.find('#submitButton').at(0).props().onClick();

    expect(wrapper.find('#email').at(0).props().error).toBe(true);
    expect(wrapper.find('#password').at(0).props().error).toBe(true);
    expect(wrapper.find(ErrorOutlineOutlined).children()).toBeDefined();
    expect(requestLoginAction).toHaveBeenCalledTimes(1);
  });
});
