/* eslint-disable no-unused-vars */
import { createStore as createStoreMocked } from 'redux';
// import createSagaMiddlewareMocked from 'redux-saga';

import { store } from './index';

jest.mock('redux');
jest.mock('redux-saga', () => jest.fn().mockImplementation(() => ({ run: jest.fn() })));
jest.mock('redux-logger');

const mockedReducers = 'mockedReducers';
jest.mock('../reducers', () => mockedReducers);

const mockedSagas = 'mockedSagas';
jest.mock('../sagas', () => jest.fn(() => mockedSagas));

describe.skip('Store', () => {
  test('Middlewares are added in dev', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    expect(createStoreMocked).toHaveBeenCalled();
    // expect(mockedMiddlewareRun).toHaveBeenCalledWith(mockedSagas);
    // expect(createStoreMocked).toHaveBeenCalledWith(mockedReducers, applyMiddlewareMocked);
    process.env.NODE_ENV = originalEnv;
  });

  test('redux-logger is not added', () => {
    // createStoreMocked.mock.calls[0]
    expect(store).toBeDefined();
  });
});
