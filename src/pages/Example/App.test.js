/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe.skip('App', () => {
  test('renders app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
