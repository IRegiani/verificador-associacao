import React from 'react';
import { shallow } from 'enzyme';
import Routes from './routes';

import App from './pages/Example/App';
import LoginPage from './pages/login';

describe('Routes', () => {
  test('renders app correctly', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders components matching routes', () => {
    const wrapper = shallow(<Routes />);
    const expectedApp = wrapper.childAt(1).props().render();
    const expectedLoginPage = wrapper.childAt(2).props().render();

    expect(expectedApp).toEqual(<App />);
    expect(expectedLoginPage).toEqual(<LoginPage />);
  });
});
