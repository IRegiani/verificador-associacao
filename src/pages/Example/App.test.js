import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe.skip('App', () => {
  test('renders app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDEfined();
  });
});
