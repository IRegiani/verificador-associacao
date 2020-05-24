import rootSaga from './index';

import { REQUEST_LOGIN_ACTION } from '../actions/actionTypes';
import { requestLoginActionSuccess, requestLoginActionFailure } from '../actions';

import { fetchAuthentication } from './auth';

jest.mock('../../api/auth');

const executeSaga = () => {};

describe.skip('STATE - Sagas', () => {
  test('rootSaga', () => {
    expect(rootSaga).toBeDefined();
  });

  test('fetchAuthentication successfully', () => {
    executeSaga(fetchAuthentication);
    const action = requestLoginActionSuccess();

    expect(action).toEqual();
  });

  test('fetchAuthentication on error', () => {
    const mockedUser = 'mockedUser';

    const action = requestLoginActionFailure(mockedUser);
    const expectedAction = {
      type: REQUEST_LOGIN_ACTION,
      payload: mockedUser,
      options: undefined,
    };

    expect(action).toEqual(expectedAction);
  });
});
