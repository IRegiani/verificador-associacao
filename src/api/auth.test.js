import { login } from './auth';

import { getConfig } from '../tempConfig';
import { mockedPost } from './mocks';

jest.mock('./mocks');

describe('Auth API', () => {
  test('login - calls route correctly with proper params', () => {
    const expectedUrl = `${getConfig().SERVICE_URL}/login`;
    const password = 'password';
    const email = 'email';

    login(email, password);
    expect(mockedPost).toHaveBeenCalledWith(expectedUrl, { email, password });
  });
});
