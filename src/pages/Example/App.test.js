import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  test('renders app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
