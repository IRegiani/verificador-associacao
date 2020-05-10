import React from 'react';
import { shallow } from 'enzyme';
import LoginPage, { Copyright } from './index';

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
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
});
