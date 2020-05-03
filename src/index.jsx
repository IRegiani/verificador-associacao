import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

// import { store } from './state';
import App from './pages/Example/App';
// TODO: add router

render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById('root'),
);
