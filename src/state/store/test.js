/* eslint-disable no-unused-vars */
import { createStore as createStoreMocked2, applyMiddleware as applyMiddlewareMocked } from 'redux';
import createSagaMiddlewareMocked from 'redux-saga';

import { store } from './index';

// const mockCreateStore = jest.fn();
// jest.mock('redux', () => ({ createStore: mockCreateStore }));
jest.mock('redux', () => ({ createStore: jest.fn() }));
jest.mock('redux-saga');
jest.mock('redux-logger');

const mockedReducers = 'mockedReducers';
jest.mock('../reducers', () => mockedReducers);

const mockedCreateSagaMiddleware = 'createSagaMiddleware';
jest.mock('../reducers', () => jest.fn(() => mockedCreateSagaMiddleware));

describe('Store', () => {
  test.only('Middlewares are added in dev', () => {
    expect(createStoreMocked2).toHaveBeenCalledWith(mockedReducers);
    // expect(createStoreMocked).toHaveBeenCalledWith(mockedReducers, applyMiddlewareMocked);
  });

  test.skip('redux-logger is not added', () => {
    // createStoreMocked.mock.calls[0]
    expect(store).toBeDefined();
  });
});
